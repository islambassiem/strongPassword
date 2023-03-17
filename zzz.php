<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    ul{
      margin: 10px 0;
      padding: 0;
    }

    ul ol{
      margin-top: 3px;
      margin-left: 0;
      padding-left: 5px;
      color: red;
    }

    .ol{
      display: inline;
    }

    .check{
      color: green;
      font-size: 20px;
      display:none;
    }

  </style>
</head>
<body>
    <form action="" method="POST">
      <input type="text" name="pass" id="pass">
      <input type="submit" value="Submit" id="submit" disabled>
      <ul>
        <span id="characterLabelCross">&#10060;</span> <span class="check" id="characterLabelcheck">&#10003;</span> <ol id="characterLabel" class="ol">From 8 - 20 chararcters</ol><br>
        <span id="capitalLableCross">&#10060;</span> <span class="check" id="capitalLableCheck">&#10003;</span><ol id="capitalLable" class="ol">At least one capital letter</ol><br>
        <span id="lowerLableCross">&#10060;</span> <span class="check" id="lowerLableCheck">&#10003;</span><ol id="lowerLable" class="ol">At least one lower letter</ol><br>
        <span id="specialLabelCross">&#10060;</span> <span class="check" id="specialLabelCheck">&#10003;</span><ol id="specialLabel" class="ol">At least one special character</ol><br>
        <span id="numberLabelCross">&#10060;</span> <span class="check" id="numberLabelCheck">&#10003;</span><ol id="numberLabel" class="ol">At least one number</ol><br>
      </ul>
    </form>
<script src="zzz.js"></script>
</body>
</html>