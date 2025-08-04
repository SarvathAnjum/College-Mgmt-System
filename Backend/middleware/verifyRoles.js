const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.status(401).json({ message: "No roles assigned or token missing" });

    const rolesArray = [...allowedRoles];
    const hasRole = req.roles
      .map((role) => rolesArray.includes(role))
      .find((val) => val === true);

    if (!hasRole) {
      return res.status(403).json({ message: "Access denied: insufficient permissions" });
    }

    next();
  };
};

module.exports = verifyRoles;
