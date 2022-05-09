<template>
  <div class="w-9/12 mx-auto">
    <div class="w-full mt-2">
      <img src="@/assets/img/video.png"/>
    </div>
    <div class="w-auto">
      <h1 class="text-xl md:text-4xl mt-2 font-extrabold">STAIR CALCULATOR</h1>
      <div class="calc-header">
        <img src="@/assets/img/calc-header-image.jpg" alt="" />
      </div>
      <div class="content-hr bg-yellow-400"></div>

      <div class="content-rise">
        <h4 class=" font-semibold text-black md:text-xl">
          <span class="badge-error">1</span>
          Floor Height From Floor To Ground (total rise)
        </h4>
        <div class="rise-label">
          <div class="text">
            <label>Inches</label>
          </div>
          <el-input-number v-model="num" :min="11" @change="handleChange" />
        </div>
        <div class="rise-label">
          <div class="text">
            <label>Fraction</label>
          </div>
          <el-select v-model="num_1" class="m-2" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>

      <div class="content-hr bg-yellow-400"></div>

      <div class="tread-board-type">
        <h4 class="font-semibold text-black md:text-xl">
          <span class="badge-error">2</span>
          Tread Board Type
        </h4>
        <div class="relative">
          <div
            class="mouban absolute left-0"
            :class="{ active: tread == 0 }"
            @click="treadClick(0)"
          ></div>
          <img src="@/assets/img/1/2-54x12.png" alt="" />
          <h4>2 - 5/4x6</h4>
        </div>
        <div class="relative">
          <div
            class="mouban  absolute left-0"
            :class="{ active: tread == 1 }"
            @click="treadClick(1)"
          ></div>
          <img src="@/assets/img/1/2-2x6.png" alt="" />
          <h4>2 - 2x6</h4>
        </div>
        <div class="relative">
          <div
            class="mouban  absolute left-0"
            :class="{ active: tread == 2 }"
            @click="treadClick(2)"
          ></div>
          <img src="@/assets/img/1/1-2x12.png" alt="" />
          <h4>1 - 2x12</h4>
        </div>
      </div>

      <div class="content-hr bg-yellow-400"></div>

      <div class="tread-board-type">
        <h4 class="font-semibold text-black md:text-xl">
          <span class="badge-error">3</span>
          Riser Board Type
        </h4>
        <div class=" relative">
          <div
            class="mouban absolute left-0"
            :class="{ active: riser == 0 }"
            @click="riserClick(0)"
          ></div>
          <img src="@/assets/img/2/3-4inch(1x8).png" alt="" />
          <h4>3/4 inch (1x8)</h4>
        </div>
        <div class=" relative">
          <div
            class="mouban absolute left-0"
            :class="{ active: riser == 1 }"
            @click="riserClick(1)"
          ></div>
          <img src="@/assets/img/2/1inch(5-4x6).png" alt="" />
          <h4>1 inch (5/4x6)</h4>
        </div>
      </div>

      <div class="content-hr bg-yellow-400"></div>

      <div class="tread-board-type">
        <h4 class="font-semibold text-black md:text-xl">
          <span class="badge-error">4</span>
          Nosing Overhang
        </h4>
        <div class="relative">
          <div
            class="mouban absolute left-0"
            :class="{ active: nosing == 0 }"
            @click="nosingClick(0)"
          ></div>
          <img src="@/assets/img/3/1inch.png" alt="" />
          <h4>1 inch</h4>
        </div>
        <div class="relative">
          <div
            class="mouban absolute left-0"
            :class="{ active: nosing == 1 }"
            @click="nosingClick(1)"
          ></div>
          <img src="@/assets/img/3/3-4inch.png" alt="" />
          <h4>3/4 inch</h4>
        </div>
        <div class="relative">
          <div
            class="mouban absolute left-0"
            :class="{ active: nosing == 2 }"
            @click="nosingClick(2)"
          ></div>
          <img src="@/assets/img/3/1-2inch.png" alt="" />
          <h4>1/2 inch</h4>
        </div>
      </div>

      <div class="content-hr bg-yellow-400"></div>

      <div class="tread-board-type">
        <h4 class="font-semibold text-black md:text-xl">
          <span class="badge-error">5</span>
          First Step Attach
        </h4>
        <div class="relative">
          <div
            class="mouban absolute left-0"
            :class="{ active: attach == 0 }"
            @click="attachClick(0)"
          ></div>
          <img src="@/assets/img/4/3d-1.png" alt="" />
          <h4>Dropped</h4>
        </div>
        <div class=" relative">
          <div
            class="mouban absolute left-0"
            :class="{ active: attach == 1 }"
            @click="attachClick(1)"
          ></div>
          <img src="@/assets/img/4/3d-2.png" alt="" />
          <h4>Flush</h4>
        </div>
      </div>

      <div class="content-button">
        <el-button type="danger" @click="start_jisuan" size="large"
          >Calculate Stairs</el-button
        >
        <el-button type="danger" size="large">Buy Tool</el-button>
      </div>
    </div>

    <div id="result" :class="{'hidden':!result_state}">
      <div class="options">
        <h4>Options</h4>
        <ul>
          <li v-for="(item, index) in T" :key="item">
            <input
              type="radio"
              name="selectedOption"
              @click="param_click(item)"
              :value="item"
              v-model="param"
            />{{ item }} treads of {{ Rise[index] }}" rise
          </li>
        </ul>
      </div>
      <div class="result">
        <h4>Result</h4>
        <h5>Based on 2 treads</h5>
        <div>
          <h3>
            <strong> Tread Depth: {{ huansuan_str(result.Tread) }}"</strong>
          </h3>
        </div>
        <div>
          <h3>
            <strong>Step Rise: {{ huansuan_str(result.StepRise) }} "</strong>
          </h3>
        </div>
        <div>
          <h3>
            <strong>
              Top Tread Depth: {{ huansuan_str(result.TopTread) }}"</strong
            >
          </h3>
          <h3>
            <strong>
              Bottom Step Rise: {{ huansuan_str(result.BottomRise) }}"</strong
            >
          </h3>
          <h3>
            <strong>Angle: {{ result.Angle }}°</strong>
          </h3>
          <h3>
            <strong>
              Stringer Length: {{ danwei_str(result.StringerLength) }}"
            </strong>
          </h3>
          <h3>
            <strong>
              2x12 Board length: {{ danwei_str(result.BoardLength) }}"
            </strong>
          </h3>
        </div>
      </div>
      <div class="result-img" v-if="!attach">
        <img src="@/assets/img/5/cssDropped.png" alt="" />
        <div class="total_run_projection">
          <h4>
            <strong>{{ danwei_str(result.TotalRunProjection) }}"</strong>
          </h4>
        </div>
        <div class="stringer-height">
          <h4>
            <strong>{{ huansuan_str(result.StringerHeight) }}"</strong>
          </h4>
        </div>
        <div class="top-tread">
          <h4>
            <strong>{{ huansuan_str(result.TopTread) }}"</strong>
          </h4>
        </div>
        <div class="tread">
          <h4>
            <strong>{{ huansuan_str(result.Tread) }}"</strong>
          </h4>
        </div>
        <div class="step-rise">
          <h4>
            <strong>{{ huansuan_str(result.StepRise) }}"</strong>
          </h4>
        </div>
        <div class="total-rise">
          <h4>
            <strong>{{ danwei_str(result.TotalRise) }}"</strong>
          </h4>
        </div>
        <div class="stringer-length">
          <h4>
            <strong>{{ danwei_str(result.StringerLength) }}"</strong>
          </h4>
        </div>
        <div class="bottom-rise">
          <h4>
            <strong>{{ huansuan_str(result.BottomRise) }}"</strong>
          </h4>
        </div>
        <div class="angle">
          <h4>
            <strong>{{ result.Angle }} °</strong>
          </h4>
        </div>
         <div class="img-text">
          <h4>
            <strong
              >This drawing does not reflect the number of stairs in your
              staircase.</strong
            >
          </h4>
        </div>
      </div>

      <div class="result-img" v-else>
        <img src="@/assets/img/5/cssFlush.png" alt="" />
        <div class="total_run_projection-1">
          <h4>
            <strong>{{ danwei_str(result.TotalRunProjection) }}"</strong>
          </h4>
        </div>
        <div class="stringer-height-1">
          <h4>
            <strong>{{ huansuan_str(result.StringerHeight) }}"</strong>
          </h4>
        </div>
        <div class="top-tread-1">
          <h4>
            <strong>{{ huansuan_str(result.TopTread) }}"</strong>
          </h4>
        </div>
        <div class="tread-1">
          <h4>
            <strong>{{ huansuan_str(result.Tread) }}"</strong>
          </h4>
        </div>
        <div class="step-rise-1">
          <h4>
            <strong>{{ huansuan_str(result.StepRise) }}"</strong>
          </h4>
        </div>
        <div class="total-rise-1">
          <h4>
            <strong>{{ danwei_str(result.TotalRise) }}"</strong>
          </h4>
        </div>
        <div class="stringer-length-1">
          <h4>
            <strong>{{ danwei_str(result.StringerLength) }}"</strong>
          </h4>
        </div>
        <div class="bottom-rise-1">
          <h4>
            <strong>{{ huansuan_str(result.BottomRise) }}"</strong>
          </h4>
        </div>
        <div class="angle-1">
          <h4>
            <strong>{{ result.Angle }} °</strong>
          </h4>
        </div>

        <div class="img-text">
          <h4>
            <strong
              >This drawing does not reflect the number of stairs in your
              staircase.</strong
            >
          </h4>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>


import { ref, reactive } from "vue";

const result_state = ref(false)

const param = ref(0);

const num = ref(47);
const num_1 = ref(0);

const value = ref(0);
const A = ref({
  A1: [2, 2, 1],
  A2: [1, 1.5, 1.5],
  A3: [5.5, 5.5, 11.25],
});
const tread = ref(0);
const B = ref({
  B1: [0.75, 1],
  B2: [7.25, 5.5],
});
const riser = ref(0);
const C = ref([1, 0.75, 0.5]);

const nosing = ref(0);
const attach = ref(0);

const xiaoshu = ref([
  0.0625, // 1/16
  0.125, // 1/8
  0.1875, // 3/16
  0.25, // 1/4
  0.3125, // 5/16
  0.375, //3/8
  0.4375, //7/16
  0.5, // 1/2
  0.5625, //9/16
  0.625, // 5/8
  0.6875, // 11/16
  0.75, // 3/4
  0.8125, // 13/16
  0.875, // 7/8
  0.9375, // 15/16
]);

const fenshu = ref([
  "1/16",
  "1/8",
  "3/16",
  "1/4",
  "5/16",
  "3/8",
  "7/16",
  "1/2",
  "9/16",
  "5/8",
  "11/16",
  "3/4",
  "13/16",
  "7/8",
  "15/16",
]);

// result
const total_run_projection = "1'8\"";

const T = ref([]);
const Rise = ref([]);

const result = ref({
  StepRise: 0,
  BottomRise: 0,
  Tread: 0,
  TopTread: 0,
  TotalRunProjection: 0,
  TotalRise: 0,
  Angle: 0,
  StringerHeight: 0,
  StringerLength: 0,
  BoardLength: 0,
});

const options = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1 / 8,
    label: "1/8",
  },
  {
    value: 1 / 4,
    label: "1/4",
  },
  {
    value: 3 / 8,
    label: "3/8",
  },
  {
    value: 1 / 2,
    label: "1/2",
  },
  {
    value: 5 / 8,
    label: "5/8",
  },
  {
    value: 3 / 4,
    label: "3/4",
  },
  {
    value: 7 / 8,
    label: "7/8",
  },
];

function param_click(value) {
  param.value = value;
  console.log(param.value);
  jisuan(param.value);
}
function handleChange(value) {
  console.log(value);
}
function treadClick(value) {
  tread.value = value;
}
function riserClick(value) {
  riser.value = value;
}
function nosingClick(value) {
  nosing.value = value;
}
function attachClick(value) {
  attach.value = value;
}

function huansuan_str(c) {
  let i = 0;
  let x = c - Math.floor(c);
  if (x != 0) {
    for (i = 0; i < xiaoshu.value.length ; i++) {
      if (x <= xiaoshu.value[i]) {
        let a = x - xiaoshu.value[i - 1];
        let b = xiaoshu.value[i] - x;
        i = a > b ? i : i - 1;
        break;
      }
    }
    if(i==-1 || i == xiaoshu.value.length )
      i = i==-1 ? 0:xiaoshu.value.length-1

    return Math.floor(c).toString() + "-" + fenshu.value[i];
  } else {
    return c.toString();
  }
}

function danwei_str(c) {
  if (c >= 12) {
    let x = Math.floor(c / 12);
    let b = c - x * 12;
    console.log(x);
    return x.toString() + "' " + huansuan_str(b);
  }
  return huansuan_str(c);
}

function huansuan_num(c) {
  let i = 0;
  let x = c - Math.floor(c);
  if (x != 0) {
    for (i = 0; i < xiaoshu.value.length - 1; i++) {
      if (x <= xiaoshu.value[i]) {
        let a = x - xiaoshu.value[i - 1];
        if(i == 0)
          a = 0
        let b = xiaoshu.value[i] - x;

        i = a > b ? i : i - 1;
        break;
      }
    }
    return Math.floor(c) + xiaoshu.value[i];
  }
  return c;
}

function jisuan(T) {
  let X = num.value + num_1.value;
  let i = 0;
  // 台阶高度
  if (attach.value == 0) i = 1;
  result.value.StepRise = huansuan_num(X / (T + i));

  // 最底部台阶高度
  result.value.BottomRise = result.value.StepRise - A.value.A2[tread.value];
  //Tread 踏板宽度
  result.value.Tread = A.value.A1[tread.value] * A.value.A3[tread.value] - C.value[nosing.value];
  // Top Tread 最上面踏板宽度

  
  result.value.TopTread = result.value.Tread - B.value.B1[riser.value];
  // otal run projection 总踏板长度
  result.value.TotalRunProjection = T * result.value.Tread;
  // Total rise  总台阶高度
  result.value.TotalRise = X;

  result.value.Angle = (
    Math.atan(result.value.StepRise / result.value.Tread) *180 /Math.PI
  ).toFixed(2);

  // 求stringer height  分两种情况
  if (attach.value == 0)
    result.value.StringerHeight =
      A.value.A2[tread.value] + result.value.StepRise;
  else result.value.StringerHeight = A.value.A2[tread.value];

  result.value.StringerLength = Math.sqrt(result.value.Tread * result.value.Tread + result.value.StepRise * result.value.StepRise) * T;

  result.value.BoardLength = result.value.StringerLength + 20 ;
  console.log(result.value);
}

function start_jisuan() {

  result_state.value = true

  console.log(T.value.length);
  let min = Math.ceil(num.value / 7.75);
  let max = Math.floor(num.value / 5.5);
  T.value = [];
  for (let i = min; i <= max && i <= 100; i++) {
    Rise.value.push(huansuan_str(huansuan_num((num.value + num_1.value) / i)));
    T.value.push(i - 1 + attach.value);
  }

  param.value = T.value[0];

  jisuan(T.value[0]);
}
</script>

<style>
.cont-video-a {
  text-align: center;
  height: 40px;
}
.cont-video-a a {
  background-color: #d9534f;
  border-color: #d43f3a;
  padding: 10px;
  line-height: 40px;
  color: aliceblue;
  border-radius: 10px;
}

.content {
  width: 70%;
  margin: 0px auto;
}
.content h1 {
  color: #2f95f9;
}
.content-hr {
  width: 100%;
  height: 5px;
  margin: 15px 0px;
  background-color: #2f95f9;
}
h4 {
  font-family: "Oswald", sans-serif;
  font-weight: normal;
  color: #666;
  margin: 3px 0px;
  padding: 3px 0px;
}
.badge-error {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #777;
  border-radius: 10px;
  background-color: #f00;
}
.rise-label {
  display: inline-block;
  margin: 0px 10px;
}
.rise-label .text {
  margin: 5px;
  color: #666;
  font-size: 20px;
}

.active {
  border: 5px solid #2f95f9;
  margin-left: -6px;
  background-color: #ffffff00 !important;
}

.tread-board-type div {
  display: inline-block;
  margin: 10px;
  text-align: center;
}
.tread-board-type .mouban {
  position: absolute;
  margin: 0px;
  background-color: #ffffff7d;
  z-index: 999;
  height: 200px;
  width: 200px;
}
.tread-board-type .mouban:hover {
  cursor: pointer;
  background-color: #ffffff00;
}

.content-button {
  margin: 10px;
}


.options {
  padding: 15px;
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
  border-radius: 10px;
}
.options ul {
  list-style: none;
  padding: 0px;
}
.options ul li {
  margin: 10px;
}
.result {
  width: 100%;
  margin-top: 25px;
  padding: 10px;
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
  border-radius: 10px;
}
.result div {
  width: 90%;
  margin: 0px auto;
  border-radius: 10px;
  margin: 15px 0px;
  background-color: #fff;
  padding: 20px;
}
.result div h3 {
  margin: 5px 0px;
}

.tread-board-type img {
  width: 200px;
}

.result-img {
  margin: 25px auto;
  position: relative;
  height: 715px;
  width: 1083px;
}
.result-img img {
  position: absolute;
  width: 1083px;
}

.result-img div h4 {
  text-align: center;
  color: #000000;
}
.result-img div{
  width: 100px;
}

/* result-img - 0 */
.total_run_projection {
  position: absolute;
  top: 21px;
  left: 604px;
  z-index: 2;
}

.stringer-height {
  position: absolute;
  top: 142px;
  left: 245px;
  z-index: 2;
}

.top-tread {
  position: absolute;
  top: 130px;
  left: 414px;
  z-index: 2;
}
.tread {
  position: absolute;
  top: 189px;
  left: 667px;
  z-index: 2;
}

.step-rise {
  position: absolute;
  top: 307px;
  left: 766px;
  z-index: 2;
}
.total-rise {
  position: absolute;
  top: 307px;
  left: 1015px;
  width: 100px;
  z-index: 2;
}
.stringer-length {
  position: absolute;
  top: 532px;
  left: 489px;
  z-index: 2;
}

.bottom-rise {
  position: absolute;
  top: 474px;
  left: 927px;
  z-index: 2;
}

.angle {
  position: absolute;
  top: 474px;
  left: 581px;
  z-index: 2;
}

/* result-img - 1 */
.total_run_projection-1 {
  position: absolute;
  top: 21px;
  left: 603px;
  z-index: 2;
}

.stringer-height-1 {
  position: absolute;
  top: 69px;
  left: 247px;
  z-index: 2;
}

.top-tread-1 {
  position: absolute;
  top: 71px;
  left: 414px;
  z-index: 2;
}
.tread-1 {
  position: absolute;
  top: 145px;
  left: 664px;
  z-index: 2;
}

.step-rise-1 {
  position: absolute;
  top: 267px;
  left: 769px;
  z-index: 2;
}
.total-rise-1 {
  position: absolute;
  top: 307px;
  left: 1016px;
  width: 100px;
  z-index: 2;
}
.stringer-length-1 {
  position: absolute;
  top: 463px;
  left: 498px;
  z-index: 2;
}

.bottom-rise-1 {
  position: absolute;
  top: 474px;
  left: 947px;
  z-index: 2;
}

.angle-1 {
  position: absolute;
  top: 468px;
  left: 593px;
  z-index: 2;
}

.img-text{
  width: 125px;
    position: absolute;
    top: 318px;
    left: 72px;
    z-index: 2;
}
</style>