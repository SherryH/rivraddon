mention CommonJS import needed for Jest.
Throws an error on the browser side - Vite uses ES Modules and there is an issue with
-> actually, Vite can transform CommonJS
The issue lies in I imported the rivraddon into html straightaway
if we let Vite does the bundle, there is no issue

Now, issue is , after i removed the script import, the window.rivraddon is not called

=> how should the html be structured? check the original vite file!
