locatorApp.service('UnitedStatesService', function(){
    return {
        getStates: function(){
         var   stateList = [
                {key: '0', value: '-- Select --', toggleOff: true},
                {key: 'AK', value: 'Alaska', toggleOff: true},
                {key: 'AL', value: 'Alabama', toggleOff: false},
                {key: 'AR', value: 'Arkansas', toggleOff: false},
                {key: 'AZ', value: 'Arizona', toggleOff: false},
                {key: 'CA', value: 'California', toggleOff: false},
                {key: 'CO', value: 'Colorado', toggleOff: false},
                {key: 'CT', value: 'Connecticut', toggleOff: false},
                {key: 'DC', value: 'District of Columbia', toggleOff: true},
                {key: 'DE', value: 'Delaware', toggleOff: false},
                {key: 'FL', value: 'Florida', toggleOff: false},
                {key: 'GA', value: 'Georgia', toggleOff: false},
                {key: 'HI', value: 'Hawaii', toggleOff: true},
                {key: 'IA', value: 'Iowa', toggleOff: false},
                {key: 'ID', value: 'Idaho', toggleOff: false},
                {key: 'IL', value: 'Illinois', toggleOff: false},
                {key: 'IN', value: 'Indiana', toggleOff: false},
                {key: 'KS', value: 'Kansas', toggleOff: false},
                {key: 'KY', value: 'Kentucky', toggleOff: false},
                {key: 'LA', value: 'Louisiana', toggleOff: false},
                {key: 'MA', value: 'Massachusetts', toggleOff: false},
                {key: 'MD', value: 'Maryland', toggleOff: false},
                {key: 'ME', value: 'Maine', toggleOff: false},
                {key: 'MI', value: 'Michigan', toggleOff: false},
                {key: 'MN', value: 'Minnesota', toggleOff: false},
                {key: 'MO', value: 'Missouri', toggleOff: false},
                {key: 'MS', value: 'Mississippi', toggleOff: false},
                {key: 'MT', value: 'Montana', toggleOff: false},
                {key: 'NC', value: 'North Carolina', toggleOff: false},
                {key: 'ND', value: 'North Dakota', toggleOff: false},
                {key: 'NE', value: 'Nebraska', toggleOff: false},
                {key: 'NH', value: 'New Hampshire', toggleOff: false},
                {key: 'NJ', value: 'New Jersey', toggleOff: false},
                {key: 'NM', value: 'New Mexico', toggleOff: false},
                {key: 'NV', value: 'Nevada', toggleOff: false},
                {key: 'NY', value: 'New York', toggleOff: false},
                {key: 'OH', value: 'Ohio', toggleOff: false},
                {key: 'OK', value: 'Oklahoma', toggleOff: false},
                {key: 'OR', value: 'Oregon', toggleOff: false},
                {key: 'PA', value: 'Pennsylvania', toggleOff: false},
                {key: 'RI', value: 'Rhode Island', toggleOff: false},
                {key: 'SC', value: 'South Carolina', toggleOff: false},
                {key: 'SD', value: 'South Dakota', toggleOff: false},
                {key: 'TN', value: 'Tennessee', toggleOff: false},
                {key: 'TX', value: 'Texas', toggleOff: false},
                {key: 'UT', value: 'Utah', toggleOff: false},
                {key: 'VA', value: 'Virginia', toggleOff: false},
                {key: 'VT', value: 'Vermont', toggleOff: true},
                {key: 'WA', value: 'Washington', toggleOff: false},
                {key: 'WI', value: 'Wisconsin', toggleOff: false},
                {key: 'WV', value: 'West Virginia', toggleOff: false},
                {key: 'WY', value: 'Wyoming', toggleOff: false}
            ];
            return stateList;
        }
    }
});




