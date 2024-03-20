// image select
function step1 (filter) 
{
    console.log("plz wait i am selecting image...");
  setTimeout( 
    function()
    {
        console.log("image selected");
       filter("selected image")
    }
    ,5000  
   );
};
// filter apply
function step2(image,caption)
{
    console.log("plz wait finding filter...");
    setTimeout(
        function()
         {
            console.log(`filter applied on ${image}`);
            caption("filtered image");
        }
        ,3000
        );
}
// caption added
function step3( caption ,upload)
{
    console.log("plz wait i am adding a caption");
    setTimeout(
        function()
        {
            console.log(`caption added on ${caption}`);
            upload("image uploaded");
        },
        6000
    )

}
// image upload
function step4(final)
{
    console.log("plz wait i am uploading  a image");
    setTimeout(
        function()
        {
            console.log(`${final}`);
            
        },
        6000
    )
}
// call back hell
// pyramid of doom
// horizantal scaling
// isse bachne ke liye hum karte hai promises
step1( 
    function(image)
    {
        step2(image, function(caption){
            step3(caption, function(final){
                step4(final);
            })
        });
    }
)
