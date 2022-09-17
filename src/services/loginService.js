const signIn = async (dataForCreate) => {
/*   const { email, password } = dataForCreate;
  const user = await User.findOne({ email });
  if (!user) {
    return { error: { code: 'notFound', message: 'User not found' } };
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return { error: { code: 'invalidData', message: 'Incorrect password' } };
  }
  const token = jwt.sign({ data: user }, secret, { expiresIn: '7d' });
  return token; */
};

const signUp = async (dataForCreate) => {
/*   const { name, email, password } = dataForCreate;
  const user = await User.findOne({ email });
  if (user) {
    return { error: { code: 'alreadyExists', message: 'User already registered' } };
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: passwordHash });
  const token = jwt.sign({ data: newUser }, secret, { expiresIn: '7d' });
  return token; */
};