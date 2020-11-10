describe('test ids', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('test id 1', async () => {
    const { useTenant } = require('./use-tenant');
    console.log(useTenant())
  })

  it('test id 2', async () => {
    const { useTenant } = require('./use-tenant');
    console.log(useTenant())
  })

  it('test id 3', async () => {
    const { useTenant } = require('./use-tenant');
    console.log(useTenant())
  })

  it('test id 4', async () => {
    const { useTenant } = require('./use-tenant');
    console.log(useTenant())
  });
})
