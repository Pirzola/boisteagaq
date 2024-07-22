module.exports = ({
          name: "reboot",
          code: `
          $shutdown
          $onlyForIDs[$clientOwnerIDs;]`
});