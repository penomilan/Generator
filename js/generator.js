const inputTitle = document.getElementById("inputTitle");
    const inputImage = document.getElementById("inputImage");
    const inputDescription = document.getElementById("inputDescription");
    const result = document.getElementById("result");

    function download() {
        let downloadLink = document.createElement('a');
        downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(result.value));
        let title = inputTitle.value;
        if (!title){
            title = "demo";
        }
        downloadLink.setAttribute('download', title + ".html");
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    function generate() {
        const title = inputTitle.value;
        const imageSrc = inputImage.value;
        const description = inputDescription.value;
        const bgColor = color.value;
        let template = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>$TITLE$</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
         <style>
            body {background-color: $COLOR$;}
            p { text-align: center;}
            h1 { text-align: center;}
            img { display: block; margin: auto; }
         </style>
         </head>
        <body>
          <div>
            <h1>$HEADING$</h1>
            <img src="$IMAGE$" heigh="200px" width="300px">
            <p>$DESCRIPTION$</p>
          <div>
        </body>
        </html>`
        template = template.replace("$TITLE$", title);
        template = template.replace("$HEADING$", title);
        template = template.replace("$IMAGE$", imageSrc);
        template = template.replace("$DESCRIPTION$", description);
        template = template.replace("$COLOR$", bgColor);
        result.innerHTML = template;
    }