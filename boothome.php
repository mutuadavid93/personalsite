<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Bree+Serif|Merriweather:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap Workfolows ---Home</title>
    <!-- Bootstrap -->
    <link href="_/css/bootstrap.css" rel="stylesheet">
    <link href="_/css/mystyles.css" rel="stylesheet">
    
  </head>
  <body id="home" data-spy="scroll" data-target=".scrollspy">
      
      <section class="container">
          <div class="row">
            <?php require_once './_/components/php/header.php'; ?>
              <div class="col-lg-8 main">
                    <?php require_once './_/components/php/artists_list.php'; ?>
              </div>
              <div class="col-lg-4 sidebar">
              </div>
          </div>
      </section>
      
      
                      

    <script src="_/js/bootstrap.js"></script>
    <script src="_/js/myscript.js"></script>
  </body>
</html>