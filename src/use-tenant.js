import { testTenant } from "./tenant"

export const useTenant = () => {
  it('should make a unique test id', async () => {
    const myTenant = testTenant
    console.log(myTenant.id)
  })
}