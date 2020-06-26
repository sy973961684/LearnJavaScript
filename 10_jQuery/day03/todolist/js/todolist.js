$(function () {
  load()
  $("#title").on("keydown", function (event) {
    if (event.keyCode == 13) {
      if ($(this).val() === "") {
        alert("todo不能为空")
      } else {
        // 1. 先读取本地存储原来的数据
        var local = getData()
        // 2. 更新local,把最新的数据追加给local数组
        local.push({ title: $(this).val(), done: false })
        saveData(local)
        // 3. toDolist 本地存储数据渲染加载到页面
        load()
        // 4. 清空input
        $(this).val("")
      }
    }
  })

  // 删除数据
  $("ol,ul").on("click", "a", function () {
    // 先获取本地存储
    var data = getData()
    // 修改数据
    var index = $(this).attr("id")
    data.splice(index, 1)
    // 保存到本地存储
    saveData(data)
    // 重新渲染页面
    load()
  })

  // 读取本地存储的数据
  function getData () {
    var data = localStorage.getItem("todolist")
    if (data !== null) {
      // 本地存储里面的数据是字符串格式
      return JSON.parse(data)
    } else {
      return []
    }
  }

  // toDolist 正在进行和已完成选项操作
  $("ol, ul").on("click", "input", function () {
    // 先获取本地数据
    var data = getData()
    // 修改本地数据
    var index = $(this).siblings("a").attr("id")
    data[index].done = $(this).prop("checked")
    // 保存到本地存储
    saveData(data)
    // 渲染页面
    load()
  })

  // 保存本地数据
  function saveData (data) {
    localStorage.setItem("todolist", JSON.stringify(data))
  }

  // 渲染加载数据
  function load () {
    // 读取本地数据
    var data = getData()
    // 清空ol里面的元素内容
    $("ol, ul").empty()
    var todoCount = 0
    var doneCount = 0
    // 遍历本地数据
    $.each(data, function (i, n) {
      if (n.done) {
        $("ul").prepend("<li><input type='checkbox' checked='checked'> <p>" + n.title + "</p> <a href='javascript:;' id=" + i + "></a></li>")
        doneCount++
      } else {
        $("ol").prepend("<li><input type='checkbox'> <p>" + n.title + "</p> <a href='javascript:;' id=" + i + "></a></li>")
        todoCount++
      }
    })
    $("#todocount").text(todoCount)
    $("#donecount").text(doneCount)
  }
})