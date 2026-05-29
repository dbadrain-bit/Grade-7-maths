// Grade 7 Ontario Math Curriculum Questions Database
const questionsDatabase = {
    "Number Sense & Numeracy": [
        {
            question: "What is the value of 3⁴?",
            options: ["12", "64", "81", "27"],
            correct: 2,
            solution: "3⁴ means 3 × 3 × 3 × 3 = 81"
        },
        {
            question: "Which of the following is an integer?",
            options: ["-5.5", "1/3", "-7", "0.25"],
            correct: 2,
            solution: "An integer is a whole number. -7 is a negative integer."
        },
        {
            question: "Express 7/8 as a decimal.",
            options: ["0.785", "0.875", "0.978", "0.756"],
            correct: 1,
            solution: "7 ÷ 8 = 0.875"
        },
        {
            question: "What is -8 + 12?",
            options: ["-4", "4", "-20", "20"],
            correct: 1,
            solution: "-8 + 12 = 4. Start at -8, move right 12 units to get 4."
        },
        {
            question: "Which fraction is equivalent to 3/4?",
            options: ["6/8", "9/15", "12/14", "15/25"],
            correct: 0,
            solution: "3/4 = 6/8 (multiply both numerator and denominator by 2)"
        },
        {
            question: "What is 2⁵?",
            options: ["10", "32", "16", "8"],
            correct: 1,
            solution: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32"
        },
        {
            question: "Convert 0.6 to a fraction in lowest terms.",
            options: ["6/10", "3/5", "6/100", "60/100"],
            correct: 1,
            solution: "0.6 = 6/10 = 3/5 (divide both by 2)"
        },
        {
            question: "What is -3 - 5?",
            options: ["-8", "2", "-2", "8"],
            correct: 0,
            solution: "-3 - 5 = -3 + (-5) = -8"
        },
        {
            question: "Which is larger: 2/3 or 3/5?",
            options: ["2/3", "3/5", "They are equal", "Cannot be determined"],
            correct: 0,
            solution: "2/3 ≈ 0.667 and 3/5 = 0.6. So 2/3 is larger."
        },
        {
            question: "What is the prime factorization of 24?",
            options: ["2 × 3 × 4", "2² × 3", "2³ × 3", "3 × 8"],
            correct: 2,
            solution: "24 = 2 × 2 × 2 × 3 = 2³ × 3"
        },
        {
            question: "What is (-2)³?",
            options: ["-8", "8", "-6", "6"],
            correct: 0,
            solution: "(-2)³ = (-2) × (-2) × (-2) = -8"
        },
        {
            question: "Order these from least to greatest: -5, -2, 0, 3",
            options: ["3, 0, -2, -5", "-5, -2, 0, 3", "0, -2, -5, 3", "-2, -5, 0, 3"],
            correct: 1,
            solution: "-5 < -2 < 0 < 3 (going from most negative to most positive)"
        },
        {
            question: "What is 1/4 + 1/2?",
            options: ["1/6", "2/4", "3/4", "2/6"],
            correct: 2,
            solution: "1/4 + 2/4 = 3/4 (convert 1/2 to 2/4)"
        },
        {
            question: "What is the GCF of 12 and 18?",
            options: ["6", "3", "4", "9"],
            correct: 0,
            solution: "Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. GCF = 6"
        },
        {
            question: "What is 2/3 × 3/4?",
            options: ["5/7", "6/12", "1/2", "8/12"],
            correct: 2,
            solution: "2/3 × 3/4 = 6/12 = 1/2"
        },
        {
            question: "What is -10 + (-5)?",
            options: ["-15", "-5", "5", "15"],
            correct: 0,
            solution: "-10 + (-5) = -15 (moving left 10 units, then 5 more)"
        },
        {
            question: "Express 1.5 as a fraction.",
            options: ["15/10", "3/2", "1/5", "5/3"],
            correct: 1,
            solution: "1.5 = 15/10 = 3/2 (simplified)"
        },
        {
            question: "What is 4/5 ÷ 2/3?",
            options: ["8/15", "6/5", "2/5", "10/15"],
            correct: 1,
            solution: "4/5 ÷ 2/3 = 4/5 × 3/2 = 12/10 = 6/5"
        },
        {
            question: "What is the LCM of 4 and 6?",
            options: ["12", "24", "2", "8"],
            correct: 0,
            solution: "Multiples of 4: 4, 8, 12, 16... Multiples of 6: 6, 12, 18... LCM = 12"
        },
        {
            question: "What is 7 - 12?",
            options: ["-5", "5", "19", "-19"],
            correct: 0,
            solution: "7 - 12 = 7 + (-12) = -5"
        }
    ],
    "Algebra": [
        { question: "Solve: x + 5 = 12", options: ["x = 7", "x = 17", "x = 2.4", "x = 60"], correct: 0, solution: "x + 5 = 12. Subtract 5 from both sides: x = 12 - 5 = 7" },
        { question: "What is the value of 3x - 2 when x = 4?", options: ["10", "12", "14", "16"], correct: 0, solution: "3(4) - 2 = 12 - 2 = 10" },
        { question: "Solve: 2x = 18", options: ["x = 9", "x = 36", "x = 16", "x = 20"], correct: 0, solution: "2x = 18. Divide both sides by 2: x = 18 ÷ 2 = 9" },
        { question: "Which expression is equivalent to 2(x + 3)?", options: ["2x + 3", "2x + 6", "x + 6", "3x + 2"], correct: 1, solution: "2(x + 3) = 2x + 6 (distribute the 2)" },
        { question: "Simplify: 3x + 2x - 5x", options: ["0", "x", "10x", "-x"], correct: 0, solution: "3x + 2x - 5x = (3 + 2 - 5)x = 0x = 0" },
        { question: "Solve: x - 3 = 8", options: ["x = 11", "x = 5", "x = 24", "x = 2.67"], correct: 0, solution: "x - 3 = 8. Add 3 to both sides: x = 8 + 3 = 11" },
        { question: "What is the value of a² when a = 3?", options: ["6", "9", "5", "12"], correct: 1, solution: "3² = 3 × 3 = 9" },
        { question: "Solve: x/2 = 5", options: ["x = 2.5", "x = 7", "x = 10", "x = 2"], correct: 2, solution: "x/2 = 5. Multiply both sides by 2: x = 5 × 2 = 10" },
        { question: "Which is NOT equivalent to 6x?", options: ["2x + 4x", "3(2x)", "12x/2", "x × 6"], correct: 2, solution: "12x/2 = 6x, but let's check others: 2x + 4x = 6x, 3(2x) = 6x, x × 6 = 6x. All are equivalent." },
        { question: "Simplify: 4(x - 2) + 3", options: ["4x - 5", "4x - 8", "4x - 1", "4x + 11"], correct: 0, solution: "4(x - 2) + 3 = 4x - 8 + 3 = 4x - 5" },
        { question: "What is the value of 2x² - 3 when x = 2?", options: ["5", "13", "4", "3"], correct: 0, solution: "2(2)² - 3 = 2(4) - 3 = 8 - 3 = 5" },
        { question: "Solve: 3x + 2 = 11", options: ["x = 3", "x = 4.33", "x = 9", "x = 13"], correct: 0, solution: "3x + 2 = 11. Subtract 2: 3x = 9. Divide by 3: x = 3" },
        { question: "Expand: (x + 2)(x + 3)", options: ["x² + 5x + 6", "x² + 5x + 5", "x² + 6", "2x + 5"], correct: 0, solution: "(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6" },
        { question: "Solve: 2x - 5 = 7", options: ["x = 6", "x = 12", "x = 1", "x = 2"], correct: 0, solution: "2x - 5 = 7. Add 5: 2x = 12. Divide by 2: x = 6" },
        { question: "What is the coefficient of x in 5x + 3?", options: ["3", "5", "8", "x"], correct: 1, solution: "The coefficient of x is the number multiplied by x, which is 5" },
        { question: "Simplify: 2x + 3y - x + y", options: ["x + 4y", "3x + 4y", "x + 2y", "3x + 2y"], correct: 0, solution: "2x - x + 3y + y = x + 4y" },
        { question: "Solve: x/3 + 2 = 5", options: ["x = 9", "x = 21", "x = 15", "x = 1"], correct: 0, solution: "x/3 + 2 = 5. Subtract 2: x/3 = 3. Multiply by 3: x = 9" },
        { question: "What is the value of 3a + 2b when a = 2 and b = 3?", options: ["12", "13", "15", "18"], correct: 0, solution: "3(2) + 2(3) = 6 + 6 = 12" },
        { question: "Solve: 4x = -12", options: ["x = -3", "x = 3", "x = -48", "x = 8"], correct: 0, solution: "4x = -12. Divide both sides by 4: x = -12 ÷ 4 = -3" },
        { question: "Simplify: -2(x - 4)", options: ["-2x + 8", "-2x - 8", "-2x - 4", "2x + 8"], correct: 0, solution: "-2(x - 4) = -2x + 8" }
    ],
    "Geometry": [
        { question: "What is the sum of angles in a triangle?", options: ["90°", "180°", "270°", "360°"], correct: 1, solution: "The sum of all angles in a triangle is always 180°" },
        { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correct: 1, solution: "A hexagon has 6 sides" },
        { question: "What is the area of a rectangle with length 8 cm and width 5 cm?", options: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"], correct: 2, solution: "Area = length × width = 8 × 5 = 40 cm²" },
        { question: "If an angle measures 45°, what type of angle is it?", options: ["Obtuse", "Right", "Acute", "Straight"], correct: 2, solution: "An acute angle is less than 90°. 45° is acute." },
        { question: "What is the perimeter of a square with side 6 cm?", options: ["12 cm", "24 cm", "36 cm", "18 cm"], correct: 1, solution: "Perimeter = 4 × side = 4 × 6 = 24 cm" },
        { question: "What is the area of a triangle with base 10 cm and height 6 cm?", options: ["30 cm²", "60 cm²", "16 cm²", "100 cm²"], correct: 0, solution: "Area = (1/2) × base × height = (1/2) × 10 × 6 = 30 cm²" },
        { question: "How many degrees are in a right angle?", options: ["45°", "90°", "180°", "360°"], correct: 1, solution: "A right angle is exactly 90°" },
        { question: "What is the circumference of a circle with radius 5 cm? (Use π ≈ 3.14)", options: ["15.7 cm", "31.4 cm", "78.5 cm", "50 cm"], correct: 1, solution: "C = 2πr = 2 × 3.14 × 5 = 31.4 cm" },
        { question: "What is the sum of angles in a quadrilateral?", options: ["180°", "270°", "360°", "450°"], correct: 2, solution: "The sum of all angles in a quadrilateral is 360°" },
        { question: "If two lines are parallel, they will:", options: ["Intersect", "Never meet", "Form a right angle", "Have the same length"], correct: 1, solution: "Parallel lines never intersect and maintain constant distance" },
        { question: "What is the area of a circle with radius 4 cm? (Use π ≈ 3.14)", options: ["12.56 cm²", "25.12 cm²", "50.24 cm²", "100.48 cm²"], correct: 2, solution: "A = πr² = 3.14 × 4² = 3.14 × 16 = 50.24 cm²" },
        { question: "How many faces does a cube have?", options: ["4", "6", "8", "12"], correct: 1, solution: "A cube has 6 faces (all squares)" },
        { question: "What type of triangle has all sides equal?", options: ["Isosceles", "Equilateral", "Scalene", "Right"], correct: 1, solution: "An equilateral triangle has all three sides equal" },
        { question: "What is the volume of a rectangular prism with length 4, width 3, and height 5?", options: ["12", "35", "60", "20"], correct: 2, solution: "V = length × width × height = 4 × 3 × 5 = 60 cubic units" },
        { question: "Which angle is 180°?", options: ["Acute", "Right", "Obtuse", "Straight"], correct: 3, solution: "A straight angle measures exactly 180°" },
        { question: "What is a line that touches a circle at exactly one point called?", options: ["Chord", "Diameter", "Tangent", "Radius"], correct: 2, solution: "A tangent line touches a circle at exactly one point" },
        { question: "What is the perimeter of a triangle with sides 5 cm, 7 cm, and 8 cm?", options: ["20 cm", "12 cm", "15 cm", "22 cm"], correct: 0, solution: "Perimeter = 5 + 7 + 8 = 20 cm" },
        { question: "How many edges does a rectangular prism have?", options: ["8", "12", "6", "10"], correct: 1, solution: "A rectangular prism has 12 edges" },
        { question: "What is the volume of a cube with side 3 cm?", options: ["9 cm³", "27 cm³", "18 cm³", "12 cm³"], correct: 1, solution: "V = side³ = 3³ = 27 cm³" },
        { question: "Two angles that sum to 90° are called:", options: ["Supplementary", "Complementary", "Vertical", "Adjacent"], correct: 1, solution: "Complementary angles sum to 90°. Supplementary angles sum to 180°." }
    ],
    "Measurement": [
        { question: "How many centimeters are in 1 meter?", options: ["10 cm", "100 cm", "1000 cm", "50 cm"], correct: 1, solution: "1 meter = 100 centimeters" },
        { question: "Convert 5 kilometers to meters.", options: ["50 m", "500 m", "5000 m", "50000 m"], correct: 2, solution: "1 km = 1000 m, so 5 km = 5 × 1000 = 5000 m" },
        { question: "How many grams are in 1 kilogram?", options: ["10 g", "100 g", "1000 g", "500 g"], correct: 2, solution: "1 kilogram = 1000 grams" },
        { question: "What is 2.5 meters in centimeters?", options: ["25 cm", "250 cm", "2500 cm", "25000 cm"], correct: 1, solution: "2.5 m × 100 = 250 cm" },
        { question: "How many milliliters are in 1 liter?", options: ["10 mL", "100 mL", "1000 mL", "10000 mL"], correct: 2, solution: "1 liter = 1000 milliliters" },
        { question: "Convert 3000 grams to kilograms.", options: ["30 kg", "300 kg", "3 kg", "0.3 kg"], correct: 2, solution: "3000 g ÷ 1000 = 3 kg" },
        { question: "What is 1 hour in seconds?", options: ["60 seconds", "600 seconds", "3600 seconds", "360 seconds"], correct: 2, solution: "1 hour = 60 minutes, 1 minute = 60 seconds, so 60 × 60 = 3600 seconds" },
        { question: "How many meters are in 800 centimeters?", options: ["8 m", "80 m", "0.8 m", "8000 m"], correct: 0, solution: "800 cm ÷ 100 = 8 m" },
        { question: "Convert 5.5 kilograms to grams.", options: ["55 g", "550 g", "5500 g", "55000 g"], correct: 2, solution: "5.5 kg × 1000 = 5500 g" },
        { question: "How many millimeters are in 1 centimeter?", options: ["1 mm", "10 mm", "100 mm", "1000 mm"], correct: 1, solution: "1 centimeter = 10 millimeters" },
        { question: "What is 45 minutes in seconds?", options: ["450 seconds", "2700 seconds", "7200 seconds", "270 seconds"], correct: 1, solution: "45 × 60 = 2700 seconds" },
        { question: "Convert 7500 milliliters to liters.", options: ["7.5 L", "75 L", "0.75 L", "750 L"], correct: 0, solution: "7500 mL ÷ 1000 = 7.5 L" },
        { question: "How many days are in 2 weeks?", options: ["7 days", "10 days", "14 days", "21 days"], correct: 2, solution: "1 week = 7 days, so 2 weeks = 2 × 7 = 14 days" },
        { question: "What is 4 meters in millimeters?", options: ["40 mm", "400 mm", "4000 mm", "40000 mm"], correct: 2, solution: "4 m = 4000 mm (1 m = 1000 mm)" },
        { question: "Convert 2.5 hours to minutes.", options: ["25 minutes", "150 minutes", "250 minutes", "2500 minutes"], correct: 1, solution: "2.5 hours × 60 = 150 minutes" },
        { question: "How many liters are in 2500 milliliters?", options: ["2.5 L", "25 L", "0.25 L", "250 L"], correct: 0, solution: "2500 mL ÷ 1000 = 2.5 L" },
        { question: "What is 1500 meters in kilometers?", options: ["1.5 km", "15 km", "0.15 km", "150 km"], correct: 0, solution: "1500 m ÷ 1000 = 1.5 km" },
        { question: "Convert 3 minutes to seconds.", options: ["30 seconds", "180 seconds", "300 seconds", "3000 seconds"], correct: 1, solution: "3 × 60 = 180 seconds" },
        { question: "How many centimeters are in 5 meters?", options: ["50 cm", "500 cm", "5000 cm", "0.5 cm"], correct: 1, solution: "5 m × 100 = 500 cm" },
        { question: "What is 8 kilograms in grams?", options: ["80 g", "800 g", "8000 g", "80000 g"], correct: 2, solution: "8 kg × 1000 = 8000 g" }
    ],
    "Data & Probability": [
        { question: "What is the median of: 3, 7, 5, 9, 2?", options: ["3", "5", "7", "9"], correct: 1, solution: "Order the values: 2, 3, 5, 7, 9. The median (middle value) is 5" },
        { question: "What is the mean of: 4, 6, 8, 10?", options: ["6", "7", "8", "9"], correct: 1, solution: "Mean = (4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = 7" },
        { question: "What is the mode of: 3, 3, 5, 7, 7, 7, 9?", options: ["3", "5", "7", "9"], correct: 2, solution: "The mode is the value that appears most frequently. 7 appears 3 times." },
        { question: "What is the range of: 12, 8, 15, 20, 5?", options: ["12", "15", "20", "15"], correct: 3, solution: "Range = highest - lowest = 20 - 5 = 15" },
        { question: "If you roll a fair die, what is the probability of getting a 3?", options: ["1/6", "1/3", "1/2", "2/3"], correct: 0, solution: "A die has 6 equally likely outcomes. P(3) = 1/6" },
        { question: "What is the mean of: 10, 20, 30?", options: ["15", "20", "25", "30"], correct: 1, solution: "Mean = (10 + 20 + 30) ÷ 3 = 60 ÷ 3 = 20" },
        { question: "If you flip a coin, what is the probability of getting heads?", options: ["1/4", "1/2", "1/3", "2/3"], correct: 1, solution: "A fair coin has 2 equally likely outcomes. P(heads) = 1/2" },
        { question: "What is the median of: 10, 15, 20, 25?", options: ["15", "17.5", "20", "22.5"], correct: 1, solution: "With 4 values, median = (15 + 20) ÷ 2 = 17.5" },
        { question: "Find the mode of: 2, 4, 4, 4, 6, 8", options: ["2", "4", "6", "8"], correct: 1, solution: "4 appears 3 times, more than any other value" },
        { question: "What is the range of: 5, 10, 15, 20?", options: ["10", "12.5", "15", "20"], correct: 2, solution: "Range = 20 - 5 = 15" },
        { question: "If you draw a card from a deck, what is the probability of drawing a heart?", options: ["1/13", "1/4", "1/2", "3/4"], correct: 1, solution: "There are 4 suits in a deck. P(heart) = 13/52 = 1/4" },
        { question: "What is the mean of: 2, 4, 6, 8, 10?", options: ["4", "6", "8", "10"], correct: 1, solution: "Mean = (2 + 4 + 6 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6" },
        { question: "Find the median of: 7, 3, 9, 1, 5", options: ["1", "3", "5", "9"], correct: 2, solution: "Order: 1, 3, 5, 7, 9. Median = 5" },
        { question: "If there are 5 red balls and 3 blue balls in a bag, what is the probability of drawing red?", options: ["3/8", "5/8", "3/5", "5/3"], correct: 1, solution: "P(red) = 5/(5+3) = 5/8" },
        { question: "What is the mode of: 1, 1, 2, 3, 3, 3, 4?", options: ["1", "2", "3", "4"], correct: 2, solution: "3 appears 3 times, more than any other value" },
        { question: "What is the range of: 100, 50, 75, 25?", options: ["25", "50", "75", "100"], correct: 2, solution: "Range = 100 - 25 = 75" },
        { question: "If you spin a wheel with 6 equal sections, what is the probability of landing on section 1?", options: ["1/6", "1/3", "1/2", "2/3"], correct: 0, solution: "Each section has equal probability. P(section 1) = 1/6" },
        { question: "Find the mean of: 5, 15, 25", options: ["10", "15", "20", "25"], correct: 1, solution: "Mean = (5 + 15 + 25) ÷ 3 = 45 ÷ 3 = 15" },
        { question: "What is the median of: 2, 4, 6, 8, 10, 12?", options: ["6", "7", "8", "9"], correct: 1, solution: "With 6 values, median = (6 + 8) ÷ 2 = 7" },
        { question: "If the probability of an event is 0.75, what is the probability it won't happen?", options: ["0.05", "0.15", "0.25", "0.35"], correct: 2, solution: "P(won't happen) = 1 - 0.75 = 0.25" }
    ],
    "Ratio & Proportion": [
        { question: "Express the ratio 8:12 in simplest form.", options: ["2:3", "4:6", "8:12", "1:1.5"], correct: 0, solution: "8:12 = (8÷4):(12÷4) = 2:3" },
        { question: "If 3 apples cost $1.50, how much do 8 apples cost?", options: ["$3.00", "$4.00", "$4.50", "$5.00"], correct: 1, solution: "Cost per apple = $1.50 ÷ 3 = $0.50. 8 apples = 8 × $0.50 = $4.00" },
        { question: "What is the ratio of 5 to 25?", options: ["1:4", "1:5", "5:1", "25:5"], correct: 1, solution: "5:25 = (5÷5):(25÷5) = 1:5" },
        { question: "If 2 pens cost $3, how much do 5 pens cost?", options: ["$6.50", "$7.00", "$7.50", "$8.00"], correct: 2, solution: "Cost per pen = $3 ÷ 2 = $1.50. 5 pens = 5 × $1.50 = $7.50" },
        { question: "Express 15:45 in simplest form.", options: ["1:3", "5:15", "15:45", "1:2"], correct: 0, solution: "15:45 = (15÷15):(45÷15) = 1:3" },
        { question: "If the ratio of boys to girls is 3:5, and there are 15 boys, how many girls are there?", options: ["9", "15", "25", "45"], correct: 2, solution: "3:5 = 15:x. Cross multiply: 3x = 75, so x = 25" },
        { question: "What is the ratio of 4 hours to 2 days?", options: ["4:2", "2:1", "1:12", "1:2"], correct: 2, solution: "2 days = 48 hours. 4:48 = 1:12" },
        { question: "If 6 workers complete a job in 8 days, how many days would 4 workers need?", options: ["5.33 days", "10 days", "12 days", "16 days"], correct: 2, solution: "This is inverse proportion. 6 × 8 = 4 × x, so 48 = 4x, x = 12" },
        { question: "Simplify the ratio 20:30:40", options: ["2:3:4", "10:15:20", "1:1.5:2", "4:6:8"], correct: 0, solution: "Divide all by 10: 20:30:40 = 2:3:4" },
        { question: "If the scale on a map is 1:10000, what actual distance does 2 cm represent?", options: ["200 m", "2000 m", "20000 m", "200000 m"], correct: 1, solution: "2 cm × 10000 = 20000 cm = 200 m" },
        { question: "What is 12:8 in simplest form?", options: ["3:2", "6:4", "12:8", "1:0.67"], correct: 0, solution: "12:8 = (12÷4):(8÷4) = 3:2" },
        { question: "If a recipe uses 2 cups flour for 3 cups sugar, how much flour is needed for 6 cups sugar?", options: ["3 cups", "4 cups", "5 cups", "6 cups"], correct: 1, solution: "2:3 = x:6. Cross multiply: 3x = 12, so x = 4" },
        { question: "Express 50:100 in simplest form.", options: ["1:2", "5:10", "50:100", "25:50"], correct: 0, solution: "50:100 = (50÷50):(100÷50) = 1:2" },
        { question: "If 5 books cost $20, what is the cost per book?", options: ["$3", "$4", "$5", "$6"], correct: 1, solution: "Cost per book = $20 ÷ 5 = $4" },
        { question: "Simplify 18:24", options: ["3:4", "6:8", "9:12", "18:24"], correct: 0, solution: "18:24 = (18÷6):(24÷6) = 3:4" },
        { question: "If the ratio of A:B is 2:3 and B = 9, what is A?", options: ["3", "6", "13.5", "18"], correct: 1, solution: "2:3 = A:9. Cross multiply: 3A = 18, so A = 6" },
        { question: "What is the ratio of 30 minutes to 2 hours?", options: ["1:4", "1:3", "1:2", "2:1"], correct: 0, solution: "2 hours = 120 minutes. 30:120 = 1:4" },
        { question: "If 4 identical items weigh 8 kg, how much do 10 items weigh?", options: ["16 kg", "18 kg", "20 kg", "24 kg"], correct: 2, solution: "Weight per item = 8 ÷ 4 = 2 kg. 10 items = 10 × 2 = 20 kg" },
        { question: "Express 35:140 in simplest form.", options: ["1:4", "5:20", "7:28", "35:140"], correct: 0, solution: "35:140 = (35÷35):(140÷35) = 1:4" },
        { question: "If the ratio of red to blue marbles is 5:3, and there are 20 red marbles, how many blue marbles are there?", options: ["10", "12", "15", "20"], correct: 1, solution: "5:3 = 20:x. Cross multiply: 5x = 60, so x = 12" }
    ],
    "Percent & Decimals": [
        { question: "What is 25% of 80?", options: ["15", "20", "25", "30"], correct: 1, solution: "25% of 80 = 0.25 × 80 = 20" },
        { question: "Convert 0.35 to a percentage.", options: ["3.5%", "35%", "350%", "0.035%"], correct: 1, solution: "0.35 × 100 = 35%" },
        { question: "Convert 60% to a decimal.", options: ["0.06", "0.6", "6.0", "60"], correct: 1, solution: "60% ÷ 100 = 0.6" },
        { question: "What is 15% of 200?", options: ["15", "20", "30", "45"], correct: 2, solution: "15% of 200 = 0.15 × 200 = 30" },
        { question: "If an item costs $50 and is on sale for 20% off, what is the sale price?", options: ["$30", "$35", "$40", "$45"], correct: 2, solution: "20% off means 20% discount = 0.20 × $50 = $10. Sale price = $50 - $10 = $40" },
        { question: "Convert 7/10 to a percentage.", options: ["7%", "70%", "0.7%", "700%"], correct: 1, solution: "7/10 = 0.7 = 70%" },
        { question: "What percentage is 15 out of 60?", options: ["15%", "25%", "35%", "45%"], correct: 1, solution: "(15 ÷ 60) × 100 = 0.25 × 100 = 25%" },
        { question: "Convert 45% to a decimal.", options: ["0.045", "0.45", "4.5", "45"], correct: 1, solution: "45% ÷ 100 = 0.45" },
        { question: "What is 50% of 120?", options: ["50", "60", "80", "100"], correct: 1, solution: "50% of 120 = 0.5 × 120 = 60" },
        { question: "If you score 18 out of 20 on a test, what is your percentage?", options: ["80%", "85%", "90%", "95%"], correct: 2, solution: "(18 ÷ 20) × 100 = 0.9 × 100 = 90%" },
        { question: "Convert 0.08 to a percentage.", options: ["0.8%", "8%", "80%", "800%"], correct: 1, solution: "0.08 × 100 = 8%" },
        { question: "What is 10% of 75?", options: ["5", "7.5", "10", "15"], correct: 1, solution: "10% of 75 = 0.10 × 75 = 7.5" },
        { question: "If a price increases from $100 to $120, what is the percentage increase?", options: ["10%", "15%", "20%", "25%"], correct: 2, solution: "Increase = $120 - $100 = $20. Percentage = ($20 ÷ $100) × 100 = 20%" },
        { question: "Convert 3/4 to a percentage.", options: ["25%", "50%", "75%", "100%"], correct: 2, solution: "3/4 = 0.75 = 75%" },
        { question: "What is 30% of 50?", options: ["10", "15", "20", "25"], correct: 1, solution: "30% of 50 = 0.30 × 50 = 15" },
        { question: "Convert 88% to a decimal.", options: ["0.088", "0.88", "8.8", "88"], correct: 1, solution: "88% ÷ 100 = 0.88" },
        { question: "What percentage is 24 out of 100?", options: ["24%", "42%", "62%", "76%"], correct: 0, solution: "(24 ÷ 100) × 100 = 24%" },
        { question: "If you get a 20% raise on a $40 hourly wage, what is the new hourly wage?", options: ["$44", "$48", "$52", "$60"], correct: 1, solution: "Raise = 20% of $40 = 0.20 × $40 = $8. New wage = $40 + $8 = $48" },
        { question: "Convert 1/5 to a percentage.", options: ["10%", "20%", "30%", "50%"], correct: 1, solution: "1/5 = 0.2 = 20%" },
        { question: "What is 5% of 200?", options: ["5", "10", "15", "20"], correct: 1, solution: "5% of 200 = 0.05 × 200 = 10" }
    ],
    "Transformations": [
        { question: "Which transformation preserves size and shape?", options: ["Dilation", "Translation", "Reflection", "Rotation"], correct: 3, solution: "Rotation is a rigid transformation that preserves both size and shape" },
        { question: "A reflection across the y-axis moves a point (x, y) to:", options: ["(-x, y)", "(x, -y)", "(-x, -y)", "(y, x)"], correct: 0, solution: "Reflecting across the y-axis negates the x-coordinate: (x, y) → (-x, y)" },
        { question: "A 90° clockwise rotation of (2, 3) results in:", options: ["(3, -2)", "(-3, 2)", "(-2, -3)", "(3, 2)"], correct: 0, solution: "90° clockwise rotation: (x, y) → (y, -x), so (2, 3) → (3, -2)" },
        { question: "Which transformation changes the size but not the shape?", options: ["Translation", "Reflection", "Dilation", "Rotation"], correct: 2, solution: "Dilation enlarges or reduces a figure while maintaining its shape" },
        { question: "A translation moves a point 3 units right and 2 units up. If the original point is (1, 2), what is the new point?", options: ["(4, 4)", "(2, 3)", "(3, 5)", "(-2, 0)"], correct: 0, solution: "(1 + 3, 2 + 2) = (4, 4)" },
        { question: "A reflection across the x-axis moves a point (x, y) to:", options: ["(-x, y)", "(x, -y)", "(-x, -y)", "(y, x)"], correct: 1, solution: "Reflecting across the x-axis negates the y-coordinate: (x, y) → (x, -y)" },
        { question: "Which transformation is NOT a rigid transformation?", options: ["Rotation", "Reflection", "Dilation", "Translation"], correct: 2, solution: "Dilation changes the size of the figure, so it's not rigid" },
        { question: "A 180° rotation of (-2, 3) results in:", options: ["(2, -3)", "(-2, -3)", "(2, 3)", "(-3, -2)"], correct: 0, solution: "180° rotation: (x, y) → (-x, -y), so (-2, 3) → (2, -3)" },
        { question: "How many lines of symmetry does a square have?", options: ["2", "4", "6", "8"], correct: 1, solution: "A square has 4 lines of symmetry: 2 diagonals and 2 through midpoints" },
        { question: "Which transformation involves turning a figure around a point?", options: ["Translation", "Reflection", "Rotation", "Dilation"], correct: 2, solution: "Rotation turns a figure around a fixed point (center of rotation)" },
        { question: "A dilation with a scale factor of 2 multiplies all distances from the center by:", options: ["1/2", "1", "2", "4"], correct: 2, solution: "A scale factor of 2 means all distances are doubled" },
        { question: "How many lines of symmetry does an equilateral triangle have?", options: ["0", "1", "3", "6"], correct: 2, solution: "An equilateral triangle has 3 lines of symmetry, each through a vertex" },
        { question: "A reflection across the line y = x moves (2, 5) to:", options: ["(5, 2)", "(-2, -5)", "(-5, -2)", "(5, -2)"], correct: 0, solution: "Reflecting across y = x swaps coordinates: (x, y) → (y, x), so (2, 5) → (5, 2)" },
        { question: "If a figure is dilated with a scale factor of 1/2, its area becomes:", options: ["The same", "1/2 the original", "1/4 the original", "Doubled"], correct: 2, solution: "Area scales by the square of the scale factor: (1/2)² = 1/4" },
        { question: "Which transformation slides a figure without rotating or flipping?", options: ["Dilation", "Translation", "Reflection", "Rotation"], correct: 1, solution: "Translation is a slide that moves every point the same distance and direction" },
        { question: "How many lines of symmetry does a rectangle have?", options: ["0", "1", "2", "4"], correct: 2, solution: "A rectangle has 2 lines of symmetry: one horizontal and one vertical" },
        { question: "A 90° counterclockwise rotation of (1, 2) results in:", options: ["(2, -1)", "(-2, 1)", "(-1, -2)", "(1, -2)"], correct: 1, solution: "90° counterclockwise rotation: (x, y) → (-y, x), so (1, 2) → (-2, 1)" },
        { question: "If a figure is dilated with a scale factor of 3, its area becomes:", options: ["3 times the original", "9 times the original", "1/3 the original", "1/9 the original"], correct: 1, solution: "Area scales by the square of the scale factor: 3² = 9" },
        { question: "How many lines of symmetry does a regular hexagon have?", options: ["3", "4", "6", "8"], correct: 2, solution: "A regular hexagon has 6 lines of symmetry" },
        { question: "Which of the following is a translation of triangle ABC?", options: ["A rotation of ABC", "A dilation of ABC", "ABC moved 4 units right", "A reflection of ABC"], correct: 2, solution: "A translation is a slide, so moving ABC 4 units right is a translation" }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionsDatabase;
}
