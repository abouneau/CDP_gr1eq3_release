const assert = require('assert')
const logController = require('../controllers/logController')
const dbconnect = require('../database/dbconnect')
const bcrypt = require('bcrypt')

/* const collection = dbconnect.client.db('accounts').collection('logins')
if (dbconnect.elementExists({ _id: 'test@example.com' }, collection)) {
  dbconnect.deleteElementFromDB({ _id: 'test@example.com' }, collection, 'Account deleted')
} */

describe('Test des fonctions de logController.js', function () {
  it('Test de createAccount', function () {
    const collection = dbconnect.client.db('accounts').collection('logins')
    if (dbconnect.elementExists({ _id: 'test@example.com' }, collection)) {
      dbconnect.deleteElementFromDB({ _id: 'test@example.com' }, collection, 'Account deleted')
    }
    const email = 'test@example.com'
    const username = 'test'
    const password = 'password'
    const passwordConf = 'password'
    const body = { email, username, password, passwordConf }
    const req = { body }
    const res = null
    logController.createAccount(req, res).then(result => {
      const element = { _id: req.body.email }
      dbconnect.findElementInDB(element, collection, 'found', 'not found').then(accountCreated => {
        assert.strictEqual(accountCreated._id, 'test@example.com')
        assert.strictEqual(accountCreated._name, 'test')
        bcrypt.compare('password', accountCreated._password).then(result => {
          assert.strictEqual(true, result)
        })
      }).catch(error => {
        console.log(error)
      })
    }).catch(error => {
      console.log(error)
    })
  })

  it('Test de authenticate', function () {
    const email = 'test@example.com'
    const password = 'password'
    const body = { email, password }
    const req = { body }
    const res = null
    logController.authenticate(req, res).then(user => {
      assert.strictEqual(user._id, 'test@example.com')
      assert.strictEqual(user._name = 'test')
      bcrypt.compare('password', user._password).then(result => {
        assert.strictEqual(true, result)
      }).catch(error => {
        console.log(error)
      })
    }).catch(error => {
      console.log(error)
    })
  })

  /* it('Test de getAllIssue', function () {
    client.connect().then(() => {
      const issues = issueController.getAllIssues('project')
      assert.strictEqual(issues[0]._id, 'id')
      assert.strictEqual(issues[0]._projectID, 'project')
      assert.strictEqual(issues[0]._name, 'name')
      assert.strictEqual(issues[0]._description, 'desc')
      assert.strictEqual(issues[0]._priority, 5)
      assert.strictEqual(issues[0]._difficulty, 5)
      assert.strictEqual(issues[0]._state, 'toDo')
      assert.strictEqual(issues[0]._color, 'alert-danger')
    })
  })

  it('Test de updateIssue état toDo', function () {
    client.connect().then(() => {
      const id = 'id'
      const projectID = 'project1'
      const name = 'name1'
      const description = 'desc1'
      const priority = 6
      const difficulty = 6
      const state = 'toDo'
      const body = { name, description, priority, difficulty, state }
      const params = { id, projectID }
      const req = { body, params }
      const res = null
      issueController.updateIssue(req, res)

      const element = { _id: req.body.id }

      const collection = dbconnect.client.db('Projets').collection('Issues')

      const issueUpdated = dbconnect.findElementInDB(element, collection, 'found', 'not found')
      assert.strictEqual(issueUpdated._id, 'id')
      assert.strictEqual(issueUpdated._projectID, 'project1')
      assert.strictEqual(issueUpdated._name, 'name1')
      assert.strictEqual(issueUpdated._description, 'desc1')
      assert.strictEqual(issueUpdated._priority, 6)
      assert.strictEqual(issueUpdated._difficulty, 6)
      assert.strictEqual(issueUpdated._state, 'toDo')
      assert.strictEqual(issueUpdated._color, 'alert-danger')
    })
  })

  it('Test de updateIssue état onGoing', function () {
    client.connect().then(() => {
      const id = 'id'
      const projectID = 'project1'
      const name = 'name1'
      const description = 'desc1'
      const priority = 6
      const difficulty = 6
      const state = 'onGoing'
      const body = { name, description, priority, difficulty, state }
      const params = { id, projectID }
      const req = { body, params }
      const res = null
      issueController.updateIssue(req, res)

      const element = { _id: req.body.id }

      const collection = dbconnect.client.db('Projets').collection('Issues')

      const issueUpdated = dbconnect.findElementInDB(element, collection, 'found', 'not found')
      assert.strictEqual(issueUpdated._id, 'id')
      assert.strictEqual(issueUpdated._projectID, 'project1')
      assert.strictEqual(issueUpdated._name, 'name1')
      assert.strictEqual(issueUpdated._description, 'desc1')
      assert.strictEqual(issueUpdated._priority, 6)
      assert.strictEqual(issueUpdated._difficulty, 6)
      assert.strictEqual(issueUpdated._state, 'onGoing')
      assert.strictEqual(issueUpdated._color, 'alert-warning')
    })
  })

  it('Test de updateIssue état end', function () {
    client.connect().then(() => {
      const id = 'id'
      const projectID = 'project1'
      const name = 'name1'
      const description = 'desc1'
      const priority = 6
      const difficulty = 6
      const state = 'end'
      const body = { name, description, priority, difficulty, state }
      const params = { id, projectID }
      const req = { body, params }
      const res = null
      issueController.updateIssue(req, res)

      const element = { _id: req.body.id }

      const collection = dbconnect.client.db('Projets').collection('Issues')

      const issueUpdated = dbconnect.findElementInDB(element, collection, 'found', 'not found')
      assert.strictEqual(issueUpdated._id, 'id')
      assert.strictEqual(issueUpdated._projectID, 'project1')
      assert.strictEqual(issueUpdated._name, 'name1')
      assert.strictEqual(issueUpdated._description, 'desc1')
      assert.strictEqual(issueUpdated._priority, 6)
      assert.strictEqual(issueUpdated._difficulty, 6)
      assert.strictEqual(issueUpdated._state, 'end')
      assert.strictEqual(issueUpdated._color, 'alert-success')
    })
  })

  it('Test de deleteIssue', function () {
    client.connect().then(() => {
      const id = 'id'
      const params = { id }
      const req = { params }
      const res = null

      issueController.deleteIssue(req, res)

      const element = { _id: req.params.id }

      const collection = dbconnect.client.db('Projets').collection('Issues')

      const issueDeleted = dbconnect.elementExists(element, collection)
      assert.strictEqual(issueDeleted, false)
    })
  }) */
})
