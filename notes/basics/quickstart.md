
# Getting Setup

1. Open your favourite texteditor.
2. Create an empty file and save it as `index.html`.
3. Open a browser. I recommend, Chrome, Mozilla, or Edge.
4. Open the path: `file:///absolute/path/to/your/file`, voila, a basic web page.
5. Return to your texteditor and add some basic `HTML` scaffolding. eg.

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
 <head>
    <meta charset="utf-8">
    <title>My first JS!</title>
 </head>
 <body>

 </body>
</html>
```

6. There are two main ways to include a script in our `HTML`.
   - Directly inline
   - Or externally. Let's opt for the external option -- add the line:

```html
<!-- just before the body closing tag -->
<script src="script.js"></script>
```

7. Create a new file in the same directory with your texteditor and call it script.js. Now we're ready to roll!
