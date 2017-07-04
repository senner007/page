<!DOCTYPE HTML>
<html>

<head>
	<meta charset="UTF-8">
	<title>page</title>
	<script type="text/javascript" src="page.js"></script>
 <link rel="stylesheet" href="css.css" title="ios">

</head>

<body class="cf">
	<div id="getPHP"><?php
  $server = $_GET['p'];
  echo $server;

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
