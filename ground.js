class Ground {

    constructor(x,y,w,h){

        var options={
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }

   show(){
    var groundPos = this.body.position
    push ()
    rectMode (CENTER)
    fill (100) 
    rect(groundPos.x,groundPos.y,this.w,this.h)
    pop ()

   } 

}

