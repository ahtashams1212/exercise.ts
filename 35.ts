
// List of animals with a common characteristic
const animals: string[] = ['Hen', 'cow', 'camel'];

// Printing the names of each animal using a for of loop
console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");

for (const animal of animals)
{
    if (animal === 'camel')
    {
        console.log(`A ${animal} is a beautiful animal.`);
    }
    
    else if (animal === 'Hen')
    {
        console.log(`A ${animal} is very useful for home hat also give us egg.`);
    }
    
    else if (animal === 'cow')
    {
        console.log(`A ${animal} is an adorable pet that also give us milk.`);
    }
}

// Common characteristic
console.log("\nWhat these animals have in common:");
console.log("Any of these animals could be a great pet!");