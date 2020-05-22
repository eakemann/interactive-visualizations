//define 'buildMetadata' function to build the metadata panel
function buildMetaData(sample){
    //Use `d3.json` to fetch the metadata for a sample
    d3.json("samples.json").then((data) => {
        var MetaData = data.metadata;
        //filter the data with the object with the desired sample number
        var ResultsArray = MetaData.filter(SampleObject => SampleObject.id == sample);
        var Result = ResultsArray[0];
        //use d3 to select the panel with the ID of #sample-metadata (id from index.html)
        var panel = d3.select("#sample-metadata");
        // Use `.html("") to clear any existing metadata
        panel.html("");
        //using object.entries to add each key and value pair to the panel
        //Inside the loop, you will need to use d3 to append new tags for each key-value in the metadata.
        Object.entries(Result).forEach(([key,value]) =>{
            panel.append("h6").text(`${key}:${value}`);
        });
            
        });

    })


 }