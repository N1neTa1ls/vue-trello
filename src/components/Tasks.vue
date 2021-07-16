<template>
  <div class="container">
    <div v-for="item of data" :key='item.id'>
      <div class="head">
        {{item.heading}}
      </div>
      <div class="wrap">
        <draggable :list="item.tasks" group="tasks">
          <div v-for="(task, index) of item.tasks" :key='index' class="task">
            <p class="shedul">ID:{{task.id}}</p>
            <p class="shedul">{{`${task.text}`}}</p>
          </div>
        </draggable>
        <div>Добавить</div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  data() {
    return {
      data: [
        {
          heading: 'ON-HOLD',
          id: 1,
          tasks: [
            {
            id: 10,
            text: 'this any random text for this task, i need moooooooooooore simbols in this field'
          },
          {
            id: 4,
            text: 'this any random text for this task'
          }]
        },
                {
          heading: 'IN-PROGRESS',
          id: 2,
          tasks: [
            {
            id: 20,
            text: 'this any random text for this task'
          }]
        },
                {
          heading: 'NEEDS-REVIEW',
          id: 3,
          tasks: [
            {
            id: 30,
            text: 'this any random text for this task'
          }]
        },
                {
          heading: 'APPROVED',
          id: 4,
          tasks: [
            {
            id: 4,
            text: 'this any random text for this task'
          }]
        },
      ]
    }
  },
  components: {
            draggable,
        },
}
</script>

<style>
body {
  background: #292b30;
}

.container {
  display: flex;
  justify-content: center;
}

.head {
  width: 250px;
  height: 40px;
  margin: 10px;
  margin-bottom: 0;
  padding-left: 15px;
  color: aliceblue;
  display: flex;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 500;
  background: #fa7d45;
}

.container div:nth-child(2) .head {
  background: #2a92bf;
}


.container div:nth-child(3) .head {
  background: #f4ce46;
}

.container div:nth-child(4) .head {
  background: #00b961;
}

.wrap {
width: 245px;
margin-left: 10px;
background: #35383f;
padding: 10px;
}

.task {
  margin: 0;
  padding: 5px;
  background: #1c1d20;
  color: rgba(240, 248, 255, 0.541);
  margin-bottom: 10px;
}

.shedul {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>