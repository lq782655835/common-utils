import EventEmitter from '../../src/js/event-emitter'

const eventEmitter = new EventEmitter()
const eventName = 'test'

afterEach(() => {
    // 每执行一个测试方法，重新初始化eventEmitter
    eventEmitter.destroy()
})

test('on', function () {
    let isTrue = false
    eventEmitter.on(eventName, () => isTrue = true)
    eventEmitter.emit(eventName)
    expect(isTrue).toBe(true)
})

test('on muilt', function () {
    let i = 0
    eventEmitter.on(eventName, () => i++)
    eventEmitter.on(eventName, () => i++)
    eventEmitter.emit(eventName)
    expect(i).toBe(2)
})

test('once', function () {
    let i = 0
    eventEmitter.once(eventName, () => i++)
    eventEmitter.emit(eventName)
    eventEmitter.emit(eventName)
    expect(i).toBe(1)
})

test('count', function () {
    let i = 0
    eventEmitter.once(eventName, () => i++)
    eventEmitter.on(eventName, () => i++)
    expect(eventEmitter.count(eventName)).toBe(2)
})

test('eventNames', function () {
    let i = 0
    eventEmitter.on(eventName, () => i++)
    expect(eventEmitter.eventNames()).toStrictEqual([eventName])
})

test('off', function () {
    let i = 0
    eventEmitter.on(eventName, () => i++)
    eventEmitter.off(eventName)
    eventEmitter.emit(eventName)
    expect(i).toBe(0)
})
