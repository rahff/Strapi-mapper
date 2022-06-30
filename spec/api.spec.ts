import { findEntityMultipleMediaResultMapping, findEntityResultMapping, findEntityWithComplexRelationshipResultMapping, findEntityWithMediaComponentResultMapping } from "../data/find/result-mapping";
import { StrapiApi } from "../src/api/strapApi"



describe("StrapiApi", ()=>{
    let api: StrapiApi;
    beforeEach(async ()=>{
        api = new StrapiApi('http://localhost:1337/api');
    })
    it("should created", ()=>{
        expect(api).toBeTruthy();
    });

    it('should return the result mapping response response in regard to query', async ()=>{
        const data = await api.get({entityName: 'collaborators'});
        expect(data).toEqual(findEntityResultMapping);
    })

    it('should return the result mapping response response in regard to query', async ()=>{
        const data = await api.get({entityName: 'multiple-files'});
        expect(data).toEqual(findEntityMultipleMediaResultMapping);
    })

    it('should return the result mapping response response in regard to query', async ()=>{
        const data = await api.get({entityName: 'portfolio-items', populate: ["list_img", "list_img.img"]});
        expect(data).toEqual(findEntityWithMediaComponentResultMapping);
    })

    it('should return the result mapping response response in regard to query', async ()=>{
        const data = await api.get({entityName: 'products', populate: ["seller"]});
        expect(data).toEqual(findEntityWithComplexRelationshipResultMapping)
    })

})