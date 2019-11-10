# irs-1040-mef-validator
This is an experiment to learn about how the MeF (Modernized e-File) Schemas work. To use this code, you'll need to register with the IRS as a software devloper and download the files for yourself.


## setup
```bash
# python 2.7
python -m virtualenv env
source env/bin/activate
pip install -r requirements.txt

python validate.py
```

## downloading the files
Go to the Secure Objects Repository:
https://la.www4.irs.gov/semail/views/list_mail

You'll need to have an IRS services account.

The file is called something like IMF_Schema_2018_Updates.zip

```bash
unzip ~/Downloads/IMF_Schema_2018_Updates.zip
unzip efile1040x_2018v6.3.zip
rm -r Attachment\ to\ MeF\ IMF\ Schemas\ 9.16.19\ FINAL\ v2.pdf Diffs1040x_2018v6.2_2018v6.3 efile1040x_2018v6.*.zip
```