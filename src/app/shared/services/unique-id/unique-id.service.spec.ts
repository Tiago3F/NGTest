import { UniqueIdService } from './unique-id.service';
describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null
  beforeEach(() => {
    service = new UniqueIdService()
  })

  // Testando se o ID contem app e verificando se o mesmo inicia com o prefixo "app-"
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix("app")
    expect(id.startsWith('app-')).toBeTrue()

  })

  // Testando se não há IDs repetidos
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set()
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix("app"))
    }
    expect(ids.size).toBe(50)
  })

  // Testando se ao chamar 2 vezes o metódo haverá realmente 2 resultados
  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix("app")
    service.generateUniqueIdWithPrefix("app")
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2)
  })

})
