// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [installation] {#installation}
  *[usage] {#usage}
  *[contributions] {#contributions} 
  *[credits] {#credits}
  *[License] {#License}
  
  
  * #installation
  ${data.installation}
  *usage
  ${data.usage}
  *contribution
  ${data.contribution}
  *instructions
  ${data.instructions}
  *credit
  ${data.credit}
  *license
  ${data.license}
  
  
  # Contact
  *Github: https://github.com/${data.git}
  *Email: ${data.email}
  `;


;


module.exports = generateMarkdown;
}
