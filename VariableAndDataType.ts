/*
**
* var vs let/const
*/

function main3() {
  console.log("START");
  if (true) {
   var lang = "vi";
    var target = "en-us";
    console.log("inside block");
    console.log(target);
  }
  console.log(lang);
  console.log(target);
}


function main2() {
    let x = 5;
    console.log(x);
    x = 10;
    console.log(x);

    let y = 55;
    console.log(y);
    y = 100;
    console.log(y);
}


function main1() {
    let y = 10;
  console.log(y);

}

/**
 * Data types
 */

function main5() {
  let message: string;
  let total: number = 100;
  let isProduction:boolean = true;
  let prices: Array<number> = [120, 88, 60];
  let languages: string[] = ['vi', 'en-us'];
  let now:Date = new Date();
  let unknown: any;

  enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
  };

  function log(msg: string): void {
    console.log(msg)
  }

  interface IPost {
    id: string;
    title: string;
    body?: string;
  }

  isProduction = false;
  unknown = Direction.UP;
  unknown = 'changed';

  const post: IPost = {id:'23',title:'hello',body:'hello'};
  message = '50';

  function getPost(postId: string): IPost {
    // do something to retrieve post
    return {
      id: postId,
      title: 'Post Title',
      body: 'Post Body',
      extra: 'data'
    } as IPost;
  }
}


// function main() {}

// tslint:enable

main2();
