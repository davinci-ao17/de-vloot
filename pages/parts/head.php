<!DOCTYPE html>
<html>
<head>
    <?php
    $titles = [
        "home" => "De vloot",
        "history" => "Geschiedenis",
        "cruisers" => "Kruisers",
        "submarines" => "Onderzeeërs",
        "flightdeckships" => "Vliegdekschepen"
    ];

    $undertitles = [
        "home" => "Regeren over het water",
        "history" => "Uit de tijd dat Marco zijn polo aan had",
        "cruisers" => "Samen in een rechte lijn varen",
        "submarines" => "Veilig onder water",
        "flightdeckships" => "Vliegensvlug overal van start"
    ]
    ?>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/css/global.css">
	<link rel="stylesheet" type="text/css" href="../css/css/global.css">
	<title><?php echo $titles[$page]; ?></title>
</head>
<body>
