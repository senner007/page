<!DOCTYPE HTML>
<html>

<head>
	<meta charset="UTF-8">
	<title>page</title>
 <link rel="stylesheet" href="css.css" title="ios">

</head>

<body class="cf">
	<div id="getPHP"><?php
 //  only set var if its not empty or 0 in length. E.g when loading the base url
	if(isset($_GET['p']) && strlen($_GET['p'])>0)
 	{
		//Sanitize the string
		$server = filter_var($_GET['p'],FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

	  echo $server;
	}
	else {
		echo 'whiskers';
	}
  ?></div>
  <h1>Kittens!</h1>

  <nav>
    <ul class="cf">
      <li><a href="/fluffy">Fluffy</a></li>
      <li><a href="/socks">Socks</a></li>
      <li><a href="/whiskers">Whiskers</a></li>
      <li><a href="/bob">Bob</a></li>
    </ul>
  </nav>
 <p id="myElem"></p>
  <p id="content"></p>

  <img src="http://placekitten.com/350/350" alt="A heartbreakingly cute kitten!" id="photo">

	<script type="text/javascript" src="jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="main.js"></script>


</body>

</html>
