const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const cors = require("cors");

var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   connectionLimit:15,
   database:"cake"
})

var server = express();

server.use(cors({
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"],
    credentials:true
}));

server.use(session({
   secret:"128位安全字符串",//加密条件
   resave:true,            //请求更新数据
   saveUninitialized:true  //保存初始化数据
}))
//7:指定静态目录
server.use(express.static("public")); 
//8:启动监听端口
server.listen(4000);


//登录验证
server.get("/login",(req,res)=>{
  var n = req.query.uname;
  var p = req.query.upwd;
  var sql =" SELECT uid FROM cake_user WHERE uname = ? AND upwd = ?";
  pool.query(sql,[n,p],(err,result)=>{
     if(err)throw err;
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"})
     }else{
       req.session.uid=result[0].id;
       res.send({code:1,msg:"登录成功"});
     }
  })
})

//退出
server.get("/loginout",(req,res)=>{
  req.session.uid=undefined;
  res.send({code:1,msg:"退出成功"})
})

//注册
server.get("/reg",(req,res)=>{
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  var email = req.query.email;
  var phone = req.query.phone;
  var sql = "SELECT uid FROM cake_user WHERE uname = ?";
  pool.query(sql,[uname],(err,result)=>{
    if(result.length==0){
      var sql = `INSERT INTO cake_user VALUES(null,'${uname}','${upwd}','${email}','${phone}')`;
    }else{
      res.send({code:-2,msg:"已存在"});
      return;
    }
    pool.query(sql,(err,result)=>{
      if(err)throw err;
      res.send({code:2,msg:"注册成功"})
    })
  })
})

//添加购物车
server.get("/addcart",(req,res)=>{
var uid = req.session.uid;
if(!uid){
  res.send({code:-2,msg:"请登录"});
  return;
}
var id = req.query.id;
var cpic = req.query.cpic;
var cname = req.query.cname;
var csize = req.query.csize;
var price = req.query.price;
var sql = "SELECT lid FROM cake_cart WHERE uid = ? AND id = ?";
pool.query(sql,[uid,id],(err,result)=>{
  if(result.length==0){
    var sql = `INSERT INTO cake_cart VALUES(null,'${id}','${cpic}','${cname}','${csize}','${price}',1,'${uid}')`;
  }else{
    var sql = `UPDATE cake_cart SET count=count+1 WHERE uid=${uid} AND id=${id}`;
  }
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"添加成功"})
  })
})
})

//购物车数量减少
server.get("/reducecart",(req,res)=>{
  var uid = req.session.uid;
  if(!uid){
    res.send({code:-2,msg:"请登录"});
    return;
  }
  var id = req.query.id;
  var sql = "SELECT count FROM cake_cart WHERE uid = ? AND id = ?";
  pool.query(sql,[uid,id],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      var sql = `DELETE FROM cake_cart WHERE uid=${uid} AND id=${id}`;
    }else{
      var sql = `UPDATE cake_cart SET count=count-1 WHERE uid=${uid} AND id=${id}`;
    }
    pool.query(sql,(err,result)=>{
      if(err)throw err;
      res.send({code:1,msg:"添加成功"})
    })
  })
})

//详情
server.get("/look",(req,res)=>{
  var id = req.query.id;
  console.log("app详情:"+id);
  var sql = "SELECT cname,ctitle,csize,price,cpic,clsid,id FROM directory WHERE id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
})


//登录用户购物车信息
server.get("/findcart",(req,res)=>{
  var uid = req.session.uid;
  if(!uid){
    res.send({code:-2,msg:"请登录",data:[]});
    return;
  }
  var sql = "SELECT lid,id,cpic,cname,csize,price,count FROM cake_cart WHERE uid=?";
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
})

server.get("/lookdetails",(req,res)=>{
  var uid = req.session.uid;
  if(!uid){
    res.send({code:-2,msg:"请登录",data:[]});
    return;
  }
  var id = req.query.id;
  var cname = req.query.cname;
  var cpic = req.query.cpic;
  // console.log("编号"+id);
  // console.log("图片"+cpic)
  var sql = "SELECT id,cpic FROM directory WHERE cname=?"
  pool.query(sql,[cname],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
})




//删除一条记录
server.get("/del",(req,res)=>{
  var uid = req.session.uid;
  if(!uid){
    res.send({code:-2,msg:"请登录"});
    return;
  }
  var lid = req.query.lid;
  // console.log(lid);
  var sql = "DELETE FROM cake_cart WHERE lid=?";
  pool.query(sql,[lid],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"});
    }else{
      res.send({code:-1,msg:"删除失败"});
    }
  })
})


server.get("/delm",(req,res)=>{
  var uid = req.session.uid;
  if(!uid){
    res.send({code:1,msg:"请登录"})
  }
  var ids = req.query.ids;
  var sql = `DELETE FROM cake_cart WHERE id IN (${ids})`
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})

//测试
//http://127.0.0.1:4000/delm?ids=4,5
//http://127.0.0.1:4000/login?uname=tom&upwd=123
//http://127.0.0.1:4000/delm?ids=4,5

// 全部名录
server.get("/goods",(req,res)=>{
  // 创建sql语句
  var sql="SELECT id,cname,ctitle,csize,price,cpic FROM Directory";
  pool.query(sql,(err,result)=>{
     if(err) throw err;
     res.send({code:1,data:result})
  })
})
// 1号
server.get("/goods/1",(req,res)=>{
  var sql="SELECT id,cname,ctitle,csize,price,cpic FROM Directory WHERE clsid=1";
  pool.query(sql,(err,result)=>{
     if(err) throw err;
     console.log(result);
     res.send({code:1,data:result})
  })
})
// 2号
server.get("/goods/2",(req,res)=>{
  var sql="SELECT id,cname,ctitle,csize,price,cpic FROM Directory WHERE clsid=2";
  pool.query(sql,(err,result)=>{
     if(err) throw err;
     res.send({code:1,data:result})
  })
})
// 3号
server.get("/goods/3",(req,res)=>{
  var sql="SELECT id,cname,ctitle,csize,price,cpic FROM Directory WHERE clsid=3";
  pool.query(sql,(err,result)=>{
     if(err) throw err;
     res.send({code:1,data:result})
  })
})
// 4号
server.get("/goods/4",(req,res)=>{
  var sql="SELECT id,cname,ctitle,csize,price,cpic FROM Directory WHERE clsid=4";
  pool.query(sql,(err,result)=>{
     if(err) throw err;
     res.send({code:1,data:result})
  })
})
// 8号
server.get("/goods/8",(req,res)=>{
  var sql="SELECT id,cname,ctitle,csize,price,cpic FROM Directory WHERE clsid=8";
  pool.query(sql,(err,result)=>{
     if(err) throw err;
     res.send({code:1,data:result})
  })
})
// 8号
server.get("/goods/9",(req,res)=>{
  var sql="SELECT id,cname,ctitle,csize,price,cpic FROM Directory WHERE clsid=9";
  pool.query(sql,(err,result)=>{
     if(err) throw err;
     res.send({code:1,data:result})
  })
})
//http://127.0.0.1:4000/goods