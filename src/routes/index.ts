import * as express  from 'express';

export const register = (app:express.Application)=>{
    const aidc = app.locals.oidc
    app.get("/" , (req:any,res)=>{
        res.render("index")
    })
}