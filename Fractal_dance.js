/* MoMath Math Square Behavior
 *
 *        Title: P5 Example
 *  Description: Display user blobs and sensors (same as debug)
 * Scheduler ID: 
 *    Framework: P5
 *       Author: Dylan Simon <dylan@dylex.net>
 *      Created: 2017-04
 *       Status: works
 */

import P5Behavior from 'p5beh';

const pb = new P5Behavior();
var self;

// for WEBGL: pb.renderer = 'webgl';

pb.preload = function (p) {
  /* this == pb.p5 == p */
  // ...
}

pb.setup = function (p) {
  /* this == pb.p5 == p */
  /* P5Behavior already calls createCanvas for us */
  // setup here...
  
};

var color=['#f9004b','#0085ff','#ffcac1','#fa8072','#6cecd8','#c1f4b4','#f9c5fe','#c8498b'];

pb.draw = function (floor, p) {
  /* this == pb.p5 == p */
  // draw here...


  this.textSize(32)
    this.text("word", 300, 500);
    this.background(color[floor.users.length]);
    if(floor.users.length>1){
        this.stroke("#f2c22e");
    }
        else{
            this.stroke(255);
        }
    this.strokeWeight(3)
    this.translate(576/2,this.height);
    self= this;
    branch(130+floor.users.length*20);
  for (let u of floor.users) {
    pb.drawUser(u);
  }
  this.fill(128, 128, 128, 128);
  this.noStroke();
  pb.drawSensors(floor.sensors);
//   console.log(floor.users.length);
};

    function branch(len){
        self.line(0,0,0,-len);
        self.translate(0,-len);
            if(len > 4){
                self.push();
                self.rotate(self.frameCount / (50.0));
                branch(len*.65);
                self.pop();
                self.push();
                self.rotate(-self.frameCount / 80.0);
                branch(len*.65);
                self.pop();
            }
    }



export const behavior = {
  title: "Sensor Debug (P5)",
  init: pb.init.bind(pb),
  frameRate: 'sensors',
  render: pb.render.bind(pb),
  numGhosts: 1
};
export default behavior
