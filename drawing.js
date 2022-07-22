let dataset = [25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
24, 18, 25, 9, 3];

d3.select("#test").selectAll("div") // d3는 빈 element를 초기에 select를 해줘야 첫 번째 값이 들어감.
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d){
        return d*5 + "px";
    });


let circleData = [5, 10, 15, 20, 25];

let w = 500;
let h = 500;

let svg = d3.select("body")
            .append("svg")
            .attr("width", 0)
            .attr("height", 0);
svg
    .attr("width", w)
    .attr("height", h)

let circles = svg.selectAll("circle")
            .data(circleData)
            .enter()
            .append("circle")

circles.attr("cx", function(d, i) {
            return (i * 50) + 25;
            })
        .attr("cy", h/2)
        .attr("r", function(d) {
            return d;
        });

circles.attr("fill", "yellow")
        .attr("stroke", "orange")
        .attr("stroke-width", function(d) {
            return d/2;
        })

let barPadding = 3;

let svgSecond = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

bars = svgSecond.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                return i * (w / dataset.length);
            })
            .attr("y", function(d) {
                return h - d*4;
            })
            .attr("width", w / dataset.length - barPadding)
            .attr("height", function(d){
                return d*4
            })
            .attr("fill", function(d) {
                return "rgb(0, 0, "+ (d * 10) + ")";
            });

texts = svgSecond.selectAll("text")
                .data(dataset)
                .enter()
                .append("text")

texts.text(function(d) {
            return d;
        })
    .attr("x", function(d, i) {
        return i * (w / dataset.length)+8;
    })
    .attr("y", function(d) {
        return h - (d*4) + 13;
    })
    .attr("font-family", 'sans-serif')
    .attr('font-size', '11px')
    .attr("text-anchor", 'middle')
    .attr("fill", 'white');