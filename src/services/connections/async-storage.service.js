export const storageService = {
  query,
  get,
  post,
  put,
  remove,
}

function query(entityType, delay = 250) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || []
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(entities)
    }, delay)
  })
}

async function get(entityType, entityId) {
  try {
    const entities = await query(entityType)
    return entities.find((entity) => entity._id === entityId)
  } catch (err) {
    throw err
  }
}
async function post(entityType, newEntity) {
  try {
    newEntity._id = _makeId()
    const entities = await query(entityType)
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
  } catch (err) {
    throw err
  }
}

async function put(entityType, updatedEntity) {
  try {
    const entities = await query(entityType)
    const idx = entities.findIndex((entity) => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
  } catch (err) {
    throw err
  }
}

async function remove(entityType, entityId) {
  try {
    const entities = await query(entityType)
    const idx = entities.findIndex((entity) => entity._id === entityId)
    if (idx < 0) throw new Error(`Unknown Entity ${entityId}`)
    entities.splice(idx, 1)
    _save(entityType, entities)
  } catch (err) {
    throw err
  }
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
  let text = ''
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
