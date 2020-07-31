<template>
    <q-btn id="bugs-container">
      <a href="https://goo.gl/forms/CqZZfBCHNx" target="_blank"><q-icon left size="32px" name="bug_report"/>
      <div>Bugs?</div>
      </a>
    </q-btn>
</template>

<script>
export default {
  name: 'Bugs',
  data () {
    return {}
  }
}
</script>

<style scoped>

#bugs-container {
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
	width: 100px;
        height: 60px;
        position: absolute;
        z-index: 2;
        color:#fafafa;
        text-align: center;
        text-transform: uppercase;
        padding: 1px 1px 0 1px;
        background-color: rgba(80,80,80,0.7);
        user-select: none;
        cursor: pointer;
        font-weight: 700;
        text-decoration: none;
        border-radius: 0 0 5px 5px;
    }

#bugs-container a {
    color:#fafafa;
    text-decoration: none;
}

</style>


