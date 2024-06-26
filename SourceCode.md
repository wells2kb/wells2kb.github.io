```
<!doctype html>
<html lang="en"><head>
    <title>Kaleb Wells Portfolio</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <script src="https://waph-uc.github.io/clock.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>

    <script src="email.js"></script>
  </head>

  <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
    <symbol id="githubIcon" viewBox="0 0 118 94">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"></path>
    </symbol>
    <symbol id="emailIcon" viewBox="0 0 118 94">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"></path>
    </symbol>
  </svg>

  <div id="welcomeAlert" class="alert alert-primary text-center" role="alert">
    <script>
      var prevTime = document.cookie.match(/(?<=prevTime=\[).+(?=\])/);

      var welcomeText = prevTime
        ? "Welcome back! Your last visit was " + prevTime
        : "Welcome to my homepage for the first time!";

      document.cookie = "prevTime=[" + Date() + "]";

      $("#welcomeAlert").text(welcomeText);
    </script>
  </div>

  <body>
    <div class="jumbotron">
      <div class="d-flex flex-wrap justify-content-center m-4">
        <img class="rounded-circle m-2" src="images/headshot.jpg" alt="My Headshot">
        <div class="flex-col m-2">
	          <h1>Kaleb Wells Portfolio</h1>
            <div class="d-flex justify-content-start">
              <p>Contact info:</p>
              <ul class="list-unstyled d-flex">
                <li class="ms-3"><a class="link-body-emphasis" href="https://github.com/wells2kb"><svg class="bi" width="24" height="24"><use href="#githubIcon"></use></svg></a></li>
                <li class="ms-3"><a class="link-body-emphasis" onclick="showHideEmail()"><svg class="bi" width="24" height="24"><use href="#emailIcon"></use></svg></a></li>
                <li class="ms-3" id="email"></li>
              </ul>
            </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="d-flex flex-wrap justify-content-around">
        <div class="flex-col m-2">
          <h3>Education</h3>
          <b>University of Cincinnati</b>
          <p>2021-2026</p>
        </div>
        <div class="flex-col m-2">
          <h3>Background</h3>
            <ul>
              <li>Embeded C developer for a safety device</li>
              <li>Developed a novel sensing device for industrial valves</li>
            </ul>
        </div>
        <div class="flex-col m-2">
          <h3>Skills</h3>
            <ul>
              <li>Embeded C</li>
              <li>VI/VIM/NVIM</li>
              <li>Sensors</li>
            </ul>
        </div>
      </div>
    </div>

    <div class="container">
        <div class="col text-center m-2">
          <h1>APIs</h1>
          <i>Public/third-party services generate the contents below and I am not responsible</i>
        </div>
      <div class="d-flex flex-wrap justify-content-around row-cols-1 row-cols-md-3">
        <div class="col text-center m-2">
          <h3>Page Tracker</h3>
          <a href="https://info.flagcounter.com/4qqR"><img src="https://s11.flagcounter.com/count2/4qqR/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter"></a>
        </div>
        <div class="col text-center m-2">
          <h3>JS Library</h3>
          <button type="button" class="btn btn-primary" onclick="confetti()">try me!</button>
        </div>
        <div class="col text-center m-2">
          <h3>Analog Clock</h3>
          <canvas id="analog-clock" width="150" height="150" style="background-color:#999">
            <script>
              var canvas = $("#analog-clock").get(0);
              var ctx = canvas.getContext("2d");
              var radius = canvas.height / 2;
              ctx.translate(radius, radius);
              radius = radius * 0.90;
              setInterval(drawClock, 1000);
  
              function drawClock()
              {
                drawFace(ctx, radius);
                drawNumbers(ctx, radius);
                drawTime(ctx, radius);
              }
            </script>
          </canvas>
        </div>
        <div class="col text-center m-2">
          <h3>Digital Clock</h3>
          <i>Not an API but I thought it looked better here</i>
          <div id="digit-clock">
            <script>
              setInterval(() => {$("#digit-clock").text(new Date())}, 500);
            </script>
          </div>
        </div>
        <div class="col text-center m-2">
          <h3>Joke API</h3>
          <i>Will take one minute to update</i>
          <div id="joke">
            <script>
              setInterval(() =>
                {
                  $.get("https://v2.jokeapi.dev/joke/Any", (result) =>
                    {
                      if (result)
                      {
                        $("#joke").text("From jokeAPI: " + result.joke);
                      }
                    }
                  )
                }, 60000);
            </script>
          </div>
        </div>
        <div class="col text-center m-2">
          <h3>Cat API</h3>
          <i>A random cat on every refresh!</i>
          <img src="https://cataas.com/cat" class="img-fluid">
        </div>
      </div>
    </div>

    <div class="container">
      <footer class="text-center m-4">
        <p>This website was made for a Web App Programing and Hacking class</p>
        <a href="https://wells2kb.github.io/waph.html">
          <button type="button" class="btn">More Info</button>
        </a>
      </footer>
    </div>
  
</body></html>
```