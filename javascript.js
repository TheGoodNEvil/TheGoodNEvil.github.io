<!DOCTYPE html>

<html>

<head>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "This is my second JavaScript sentence, and I have more exciting things coming.";
}
</script>

</head>

<style> body {font-family: "Monotype Corsiva"; font-style: italic; color: red; text-shadow: 1px 1px 1px white; border: 1px outset red; border-radius: 10px; text-align: center;}
</style>

<body>

<h1>JavaScript Page</h1>

<p id="demo">This is my first JavaScript sentence, and click the button to see the next sentence.</p>

<button type="button" onclick="myFunction()">Try it</button>

</body>

</html>
