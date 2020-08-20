function getRoot(request,response){
    response.status =200
    response.json({
        name:'gtuu',
        value: 123
    })
}

async function AddTarckToDatabase(req, res)
{
    console.log("i am adding")
//     if (!req.body.title) {
//         res.status(400).send({
//           message: "Content can not be empty!",
//         });
//         return;
//       }
    
//       // Create a Track
//       const track = {
//         id: req.body.id,
//         title: req.body.title,
//         uri: req.body.uri,
//         master_id: req.body.master_id,
//         playlist_id: req.body.playlist_id,
//         thumb: req.body.thumb,
//       };
    
    
 
//      const sql= "INSERT INTO track (id, playlist_id, title, uri, master_id) VALUES ('1', '1', 'nirvana', '/img/src', '8787')";
//      con.connect(function(err) {
//         if (err) throw err;
//         con.query(sql, function (err, result) {
//           if (err) throw err;
//           console.log(result)
//          // response.send(JSON.stringify(result))
//          // response.send(result)
          
          
//         });
//       });
 }


module.exports ={
    getRoot,AddTarckToDatabase
}