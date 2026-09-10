export function buildEmployee({ firstName = 'Auto', middleName = 'Test', lastName = 'Employee' } = {}) {
  const uniqueId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  return {
    firstName: `${firstName}${firstName === 'Auto' ? uniqueId.slice(-6) : ''}`,
    middleName,
    lastName,
    employeeId: uniqueId.slice(-8)
  };
}
