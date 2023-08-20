
let engine = Matter.Engine.create();

let render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false
    }
});

let ground = Matter.Bodies.rectangle(1200,600,400,50, {isStatic: true});


let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint  = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render: {visible: false}
    }
});

render.mouse = mouse;

let ball = Matter.Bodies.circle(300,600,20);
let sling 

let stack = Matter.Composites.stack(1100, 270, 6, 6, 0, 0, function(x,y) {
    // let sides =  Math.round(Matter.Common.random(2,8));
    return Matter.Bodies.polygon(x, y, 8, 30);
});

Matter.World.add(engine.world, [stack, ground, mouseConstraint]);
Matter.Engine.run(engine);
Matter.Render.run(render);



