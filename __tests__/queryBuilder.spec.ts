import { QueryBuilder } from "../src/builders/queryBuilder"
import { allPopulateSecondLevel, populatedOneRelationshipAndManyFieldInSecondLevel, populatedManyRelationshipAndManyFieldInSecondLevel, oneToManyObject, manyToManyObject, manyToAll, someRelationshipToPopulate, populateSomeFieldsFirstLevel, someSelectedField, populateSomeSlectedFields, populateSomeSlectedFieldsAndPopulateSelectedFieldInRelationship } from "../data/queries.qs";

describe('Query Builder', () => {
    let queryBuilder: QueryBuilder;
    beforeEach(()=>{
        queryBuilder = new QueryBuilder();
    })

    it('should build an appropriate query string to populate one relationship and populate many fields in second level', ()=>{
        const result = queryBuilder.populateOneRelationShipAndPopulateSomeFields(oneToManyObject);
        expect(result).toEqual(populatedOneRelationshipAndManyFieldInSecondLevel)
    });

    it("should build a appropriate query string to populate many relationships and populate all fields in second level", ()=>{
        const result = queryBuilder.populateSomeRelationshipAndPopulateAllField(manyToAll);
        expect(result).toEqual(allPopulateSecondLevel)
    });

    it('should build a appropriate query string to populate many relationships and populate many fields in second level', ()=>{
        const result = queryBuilder.populateSomeRelationshipsAndPopulateSomeFields(manyToManyObject)
        expect(result).toEqual(populatedManyRelationshipAndManyFieldInSecondLevel)
    })

    it('should build a appropriate query string to populate one or many relationship in first level', ()=>{
        const result = queryBuilder.populateSomeRelationships(someRelationshipToPopulate)
        expect(result).toEqual(populateSomeFieldsFirstLevel);
    });

    it('should build a appropriate query string to populate only selected fields without any population', ()=>{
        const result = queryBuilder.populateFieldBySelection(someSelectedField)
        expect(result).toEqual(populateSomeSlectedFields);
    })

    it('should build a appropriate query string to populate only selected fields with selected field in second level of population', ()=>{
        const result = queryBuilder.populateFieldBySelection(someSelectedField, {population: [{relationshipName: "social_list", populateFields: ["url"]}]})
        console.log(populateSomeSlectedFieldsAndPopulateSelectedFieldInRelationship);
        expect(result).toEqual(populateSomeSlectedFieldsAndPopulateSelectedFieldInRelationship);
    })

});