const mymodule = require('./mymodule.js');
const[,,dir,ext] = process.argv;

mymodule(dir,ext,(err,list)=>{
	if(err) throw err;
	list.forEach(e=>console.log(e));
});
