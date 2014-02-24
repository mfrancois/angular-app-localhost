<?php
header('Access-Control-Allow-Origin: *');
header('application/json');
date_default_timezone_set('Europe/Paris');
$root = "E:/WORKS/www/";
$project = (!empty($_GET['project'])) ? $_GET['project'] : '';
$folder  = glob($root . "*");



if (!empty($project))
{
    $readme = $root. '' . $project . '/readme.md';
    if (is_file($readme))
    {
        $readme = file_get_contents($readme);
    }
    else
    {
        $readme = $root . '' . $project . '/app/readme.md';

        if (is_file($readme))
        {
            $readme = file_get_contents($readme);
        }else{
            $readme = '<em>na</em>';
        }
    }

    echo json_encode(array('result'=>urlencode($readme)));
    exit;
}


foreach ($folder as $k => $fold)
{

//    $image = (is_file($fold . '/app/favicon.ico')) ? str_replace($root, '', $fold) . '/app/favicon.ico' : 'assets/img/doc-icon.jpg';

    $folder[$k] = array(
        "folder"       => str_replace($root, '', $fold),
        "modification" => date("d/m/Y H:i:s", filectime($fold)),
        'image'        => 'assets/img/doc-icon.jpg'
    );
}
echo json_encode($folder);