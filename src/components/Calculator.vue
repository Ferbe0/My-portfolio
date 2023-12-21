<script >
export default {

  data(){
    return{
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false
    }
  },
  methods: {
    clear(){
      this.current = ''
    },
    sign(){
      this.current = this.current.charAt(0) === '-' ?
        this.current.slice(1) :  `-${this.current}`;
    },
    percent(){
      this.current = `${parseFloat(this.current) / 100}`
    },
    append(number){
      if(this.operatorClicked){
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot(){
      if(this.current.indexOf('.') === -1){
        this.append('.');
      }
    },
    setPrevious(){
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide(){
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    times(){
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus(){
      this.operator = (a, b) => b - a;
      this.setPrevious();
    },
    add(){
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal(){
      this.current = `${this.operator(parseFloat(this.current), parseFloat(this.previous))}`;
      this.previous = null;
    }
  }

}
</script>

<template>
  <div class="container">
  <div class="calculator">
      <div class="display">{{ current || 0 }}</div>
      <div class="btn1" @click="clear">C</div>
      <div class="btn1" @click="sign">+/-</div>
      <div class="btn1" @click="percent">%</div>
      <div class="btn1 operator" @click="divide">÷</div>
      <div class="btn1" @click="append('7')">7</div>
      <div class="btn1" @click="append('8')">8</div>
      <div class="btn1" @click="append('9')">9</div>
      <div class="btn1 operator" @click="times">x</div>
      <div class="btn1" @click="append('4')">4</div>
      <div class="btn1" @click="append('5')">5</div>
      <div class="btn1" @click="append('6')">6</div>
      <div class="btn1 operator" @click="minus">-</div>
      <div class="btn1" @click="append('1')">1</div>
      <div class="btn1" @click="append('2')">2</div>
      <div class="btn1" @click="append('3')">3</div>
      <div class="btn1 operator" @click="add">+</div>
      <div class="zero btn1" @click="append('0')">0</div>
      <div class="btn1" @click="dot">.</div>
      <div class="btn1 operator" @click="equal">=</div>
  </div>
  </div>
</template>

<style>

.calculator{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  font-size: 40px;
  margin: 0 auto;
  width: 400px;
  margin-top: 150px;

}
.display{
  background: black;
  color: white;
  grid-column: 1 / 5;
  display: flex;
  justify-content: center;
}
.zero{
  grid-column: 1 / 3;
}
.btn1{
  background: #eee;
  display: flex;
  justify-content: center;
  border: 1px solid #999;
  cursor: pointer;
}
.operator{
  background: orange;
  color: white;
}
</style>
