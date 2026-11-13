

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find ID</title>

    <link rel="icon" href="icon.png">

    <link rel="stylesheet" href="index.css">
    <script src="id-validate.js"></script>
</head>

<header>

    <ul class = "header-item-container"><a href = "index.php"><img id = "logo" src = "icon.png"></a></ul>
    
    <ul class = "header-item-container2">
        <a id = "here" class = "link" href = "index.php">Find</a>
        <a  class = "link" href = "submit_card.php">Submit</a>
        <a class = "link" href = "about.html">About</a>
    </ul>
</header>
<body>
    

    <form action="find.php" method="POST" id="card">
    <input name="id_number" placeholder="Id number">
    <input name="id_name" placeholder="Name">
    <input name="id_surname" placeholder="Surname">
    <button type="submit">Search</button><br>


   
</form>





</body>
</html>