<?php

header('application/json');
date_default_timezone_set('Europe/Paris');

$project = (!empty($_GET['project'])) ? $_GET['project'] : '';
$folder  = glob($_SERVER['DOCUMENT_ROOT'] . "*");


if (!empty($project))
{
    $readme = $_SERVER['DOCUMENT_ROOT'] . '' . $project . '/readme.md';
    if (is_file($readme))
    {
        $readme = file_get_contents($readme);
    }
    else
    {
        $readme = $_SERVER['DOCUMENT_ROOT'] . '' . $project . '/app/readme.md';

        if (is_file($readme))
        {
            $readme = file_get_contents($readme);
        }else{
            $readme = '<em>na</em>';
        }
    }

    echo json_encode(array('result'=>urlencode(utf8_decode($readme))));
    exit;
}


foreach ($folder as $k => $fold)
{

    $image = (is_file($fold . '/app/favicon.ico')) ? str_replace($_SERVER['DOCUMENT_ROOT'], '', $fold) . '/app/favicon.ico' : 'libs/img/doc-icon.jpg';

    $folder[$k] = array(
        "folder"       => str_replace($_SERVER['DOCUMENT_ROOT'], '', $fold),
        "modification" => date("d/m/Y H:i:s", filectime($fold)),
        'image'        => $image
    );
}
echo json_encode($folder);