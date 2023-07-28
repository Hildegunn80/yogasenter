<?php
// Hent verdiene fra skjemaet
$name = $_POST['inputname'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$address = $_POST['address'];

// checkboxes
$chkMelding = $_POST['chkMelding'];
$chkVennepris = $_POST['chkVennepris'];
$chkKeyYogaTirsdag = $_POST['chkKeyYogaTirsdag'];
$chkKeyYogaTorsdag = $_POST['chkKeyYogaTorsdag'];
$ChkMeditativHealing = $_POST['ChkMeditativHealing'];

// msgbox from user
$msgbox = $_POST['msgbox'];

function isValueSet($value, $name) {
    if (isset($value)) {

        if (strlen($value) == 0) {
            echo $name . " is empty\n";
            return false;
        }

        echo $name.": ".$value."\n";
        return true;
    } else {
        echo $name."is not set...\n";
        return false;
    }
}

// check we got all parameters.
$allValuesPresent = true;
if (!isValueSet($name, "name")) $allValuesPresent = false;
if (!isValueSet($email, "email")) $allValuesPresent = false;
if (!isValueSet($mobile, "mobile")) $allValuesPresent = false;
if (!isValueSet($address, "address")) $allValuesPresent = false;

if (!isValueSet($chkMelding, "chkMelding")) $allValuesPresent = false;
if (!isValueSet($chkVennepris, "chkVennepris")) $allValuesPresent = false;
if (!isValueSet($chkKeyYogaTirsdag, "chkKeyYogaTirsdag")) $allValuesPresent = false;
if (!isValueSet($chkKeyYogaTorsdag, "chkKeyYogaTorsdag")) $allValuesPresent = false;
if (!isValueSet($ChkMeditativHealing, "ChkMeditativHealing")) $allValuesPresent = false;

if (!isValueSet($msgbox, "msgbox")) $allValuesPresent = false;

if ($allValuesPresent == false) {
    echo "ERROR: Some values are missing!\n";
    return;
}

$message = "Message from stordyogasenter\n\n";
$message .= "Påmelding for:\n";
$message .= "From: " . $name . "\n";
$message .= "email: " . $email . "\n";
$message .= "mobile: " . $mobile . "\n";
$message .= "address: " . $address . "\n\n";
$message .= "\n\n";

$message .= "Choices:\n";
if ($chkMelding == "true") {
    $message .= "[x] Melding til Yogasenter.\n";
}

if ($chkVennepris == "true") {
    $message .= "[x] Vi ønsker venne pris....\n";
}

if ($chkKeyYogaTirsdag == "true") {
    $message .= "[x] ønsker delta på Key-Yoga Tirsdag.\n";
}

if ($chkKeyYogaTorsdag == "true") {
    $message .= "[x] ønsker delta på Key-Yoga Torsdag.\n";
}

if ($ChkMeditativHealing == "true") {
    $message .= "[x] ønsker Meditative healing.\n";
}

"Din melding (frivillig)";

$message .= "\n\n";
$message .= "Message from user:\n";
$message .= $msgbox;

// Sjekk ugyldige tegn i navn og epostadresse.
// Godta visse europeiske spesialbokstaver.
// Hindre meldinger lengre enn 500 tegn.
// Dette gjør det vanskelig å spamme via tilbakemeldingsskjemaet.

try {
    if(preg_match("#^[-a-zA-Z0-9éèÉÈäöæøåÄÖÆØÅ._ ]+$#",$name) AND
        preg_match("#^[-a-zA-Z0-9.@+!=()_:]+$#",$email) AND
        strlen($message) < 4096) {
        echo "Sending mail to: ".$email."\n";

        if (mail("stord.yogasenter@gmail.com",              // din epostadresse : stord.yogasenter@gmail.com
            "Melding fra stordyogasenter.no",           // emne
            "Melding fra $name <$email>:\n\n$message",  // meldingsteksten
            "From: Tilbakemeldingsskjema <noreply@stordyogasenter.no>" // avsender
            )) {

            echo "Message successfully sent\n";
        } else {
                /*
                echo "<p>Klarte ikke å sende meldingen via epost,vennligst ta kontakt via telefon eller brev.</p>";
                echo "<p>Ugyldig forespørsel. Forsøket har blitt logget.OBS: navn kan ikke inneholde andre tegn enn: <code>-a-z0-9éèäöæøå._</code>,";
                echo "epostadresse kun <code>-a-zA-Z0-9.@+!=()_:</code>,og meldingen får ikke være lengre enn 500 tegn.</p>";
                echo "<p>Invalid request. The attempt has been logged.</p>";
                */
            echo "Error sending mail sent.\n";

            # Her kan du kode en rutine som logger forsøket på å gå rundt systemet!
        }
    } else {
        echo "Data not valid to use as email..\n";
    }
} catch (Exception $e) {
    echo 'Error caught exception: ',  $e->getMessage(), "\n";
}

echo "Done\n";

?>
