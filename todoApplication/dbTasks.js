const Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://rishabsaxena:@localhost:5432/tododatabase')

function createTask (description) {
  const query = `insert into tasks (description,status) values (\'${description}\',false)`
  const createTask = sequelize.query(query)
  return createTask
}

function readTask () {
  const query = `select id,description,status from tasks`
  const readTasks = sequelize.query(query)
  return readTasks
}

function updateTask (id, description, status) {
  if (!description) {
    const query = `update tasks set status = '${status}' where id = ${id} `
    return sequelize.query(query)
  }
  if (!status) {
    const query = `update tasks set description = '${description}' where id = ${id} `
    return sequelize.query(query)
  }
  const query = `update tasks set description = '${description}', status = '${status}' where id = ${id} `
  return sequelize.query(query)
}

function destroyTask (id) {
  const query = `delete from tasks where id = ${id}`
  const destroyTask = sequelize.query(query)
  return destroyTask
}
module.exports = { createTask, readTask, updateTask, destroyTask }
