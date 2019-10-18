<<template>
  <div>
    dashboard
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="选择日期时间"
      align="right">

<!--      :picker-options="pickerOptions"-->
    </el-date-picker>
  </div>
</template>
<script>
  export default {
    name: 'Dashboard',
    data() {
      return {
        value2:''
      };
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
