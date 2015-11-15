<?php 

	if ($_POST["submit"]) {
	
		$result='<div class="alert alert-success">Form submitted</div>';
	
		if (!$_POST['name']) {
		
			$error="<br />Please enter your name";
			
		}
		
		if (!$_POST['email']) {
		
			$error.="<br />Please enter your email";
			
		}
		
		if (!$_POST['comment']) {
		
			$error.="<br />Please enter your message";
			
		}
		
		if ($_POST['email']!="" AND !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

			$error.="<br />Please use a valid email address";
		}
		
		if ($error) {
		
		$result='<div class="alert alert-danger"><strong>Error(s) in form:</strong> '.$error.'</div>';
		
		} else {
		
			if (mail("ortiz6499@gmail.com", "Message from website", "Name: ".$_POST['name']."
			
			Email: ".$_POST['email']."
			
			Comment: ".$_POST['comment'])) {
			
				$result='<div class="alert alert-success"><strong>Thank You</strong>I\'ll be in touch.</div>';
			
				} else {
				
				$result='<div class="alert alert-danger">Sorry, there was an error sending your message, please try again later.</div>';
				
				}
			
		
		}
	
	}

?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>fewd trey six</title>
<link rel="stylesheet" type="text/css" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<header>
<nav class="navbar navbar-inverse navbar-static-top">
<div class="container-fluid">
<!-- Brand and toggle get grouped for better mobile display -->
<div class="navbar-header">
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
<a class="navbar-brand" href="#">Jonathan Ortiz</a>
</div>
<!-- Collect the nav links, forms, and other content for toggling -->
<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
<ul class="nav navbar-nav navbar-right">
<li><a href="#div1">Home</a></li>
<li class="active"><a href="#div2">Contact</a></li>
<li><a href="#div3">About</a></li>
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Fewd-36 <span class="caret"></span></a>
<ul class="dropdown-menu">
<li><a href="#">Folio</a></li>
<li><a href="#">Resume</a></li>
<li><a href="#">Code alongs</a></li>
<li role="separator" class="divider"></li>
<li class="disabled"><a href="#">Extra Credit</a></li>
</ul>
</li>
</ul>
</div><!-- /.navbar-collapse -->
</div><!-- /.container-fluid -->
</nav>
</header>

<div>
   
<div class="container"> 
	<div class="row">
		<div class="col-md-6 col-md-offset-3 emailForm">
			<h1>Get in Touch</h1>
			
			<?php echo $result; ?>
			
			<p class="lead">I will get back to you soon.</p>
			
			<form method="post">
				
				<div class="form-group">
					<label for="name">Name:</label>
					<input type="text" name="name" class="form-control" placeholder="Name" value="<?php echo $_POST['name']; ?>" />
				</div>
				
				<div class="form-group">
					<label for="email">Email:</label>
					<input type="email" name="email" class="form-control" placeholder="Email" value="<?php echo $_POST['email']; ?>" />
				</div>
				
				<div class="form-group">
					<label for="comment">Message:</label>
					<textarea class="form-control" name="comment" value="<?php echo $_POST['comment']; ?>"></textarea>
				</div>
				
				<input type="submit" name="submit" class="btn btn-success btn-block" value="Submit" />
			
	
			</form>
			
			
		</div>
	</div>
</div>
    
    
    
    
    
</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
<nav class="navbar navbar-inverse navbar-fixed-bottom">
<div class="container">
<ul>
<li class="#"><a href="#" alt="twitter"><i class="ion-social-twitter icon-small"></i></a></li>
<li class="#"><a href="#" alt="instagram"><i class="ion-social-instagram icon-small"></i></a></li>
<li class="#"><a href="#" alt="linked in"><i class="ion-social-linkedin icon-small"></i></a></li>
</ul>
</div>
</nav>

    

        


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>
